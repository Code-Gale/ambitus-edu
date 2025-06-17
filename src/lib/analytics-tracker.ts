// StatfulInsights Analytics Tracker
// Lightweight, privacy-focused analytics library

interface AnalyticsConfig {
  siteId: string;
  apiEndpoint?: string;
  trackPageViews?: boolean;
  trackPerformance?: boolean;
  trackOutboundLinks?: boolean;
}

interface PerformanceMetrics {
  lcp?: number;
  fid?: number;
  cls?: number;
  ttfb?: number;
}

export class StatfulAnalytics {
  private config: AnalyticsConfig;
  private sessionId: string;
  private apiEndpoint: string;
  private initialized = false;
  private isDevelopment = process.env.NODE_ENV === 'development';

  constructor() {
    this.sessionId = this.generateSessionId();
  }

  init(config: AnalyticsConfig | string) {
    if (typeof config === 'string') {
      this.config = { siteId: config };
    } else {
      this.config = config;
    }

    // Set default values
    this.config.trackPageViews = this.config.trackPageViews !== false;
    this.config.trackPerformance = this.config.trackPerformance !== false;
    this.config.trackOutboundLinks = this.config.trackOutboundLinks !== false;

    // Set API endpoint with /functions/v1
    this.apiEndpoint = this.config.apiEndpoint?.endsWith('/functions/v1') 
      ? this.config.apiEndpoint 
      : `${this.config.apiEndpoint}/functions/v1`;
    this.initialized = true;

    // Auto-track initial page view
    if (this.config.trackPageViews) {
      this.trackPageView();
    }

    // Track performance metrics
    if (this.config.trackPerformance) {
      this.trackPerformance();
    }

    // Track outbound links
    if (this.config.trackOutboundLinks) {
      this.trackOutboundLinks();
    }

    // Track page visibility for session duration
    this.trackVisibility();

    console.log('[StatfulAnalytics] Initialized with site ID:', this.config.siteId);
  }

  trackPageView(page?: string, title?: string) {
    if (!this.initialized) return;

    const pageUrl = page || window.location.pathname + window.location.search;
    const pageTitle = title || document.title;
    const referrer = document.referrer;

    const data = {
      site_id: this.config.siteId,
      session_id: this.sessionId,
      page_url: pageUrl,
      page_title: pageTitle,
      referrer: referrer || undefined,
      user_agent: navigator.userAgent,
      screen_resolution: `${screen.width}×${screen.height}`
    };

    this.sendData('/track-pageview', data);
  }

  trackEvent(eventName: string, eventData?: any, page?: string) {
    if (!this.initialized) return;

    const data = {
      site_id: this.config.siteId,
      session_id: this.sessionId,
      event_name: eventName,
      event_data: eventData,
      page_url: page || window.location.pathname + window.location.search
    };

    this.sendData('/track-event', data);
  }

  private trackPerformance() {
    if (!('PerformanceObserver' in window)) return;

    const metrics: PerformanceMetrics = {};

    // Track Core Web Vitals
    try {
      // LCP
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1] as any;
        metrics.lcp = lastEntry.startTime;
      });
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });

      // FID
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          metrics.fid = entry.processingStart - entry.startTime;
        });
      });
      fidObserver.observe({ entryTypes: ['first-input'] });

      // CLS
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
          }
        });
        metrics.cls = clsValue;
      });
      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // TTFB
      if (performance.timing) {
        metrics.ttfb = performance.timing.responseStart - performance.timing.requestStart;
      }

      // Send performance data after page load
      window.addEventListener('load', () => {
        setTimeout(() => {
          this.sendPerformanceData(metrics);
        }, 1000);
      });
    } catch (error) {
      console.warn('[StatfulAnalytics] Performance tracking error:', error);
    }
  }

  private sendPerformanceData(metrics: PerformanceMetrics) {
    const data = {
      site_id: this.config.siteId,
      session_id: this.sessionId,
      page_url: window.location.pathname + window.location.search,
      performance: metrics
    };

    this.sendData('/track-pageview', data);
  }

  private trackOutboundLinks() {
    document.addEventListener('click', (event) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href && this.isOutboundLink(link.href)) {
        this.trackEvent('outbound_link_click', {
          url: link.href,
          text: link.textContent?.trim() || undefined
        });
      }
    });
  }

  private trackVisibility() {
    let startTime = Date.now();
    let isVisible = !document.hidden;

    const trackTime = () => {
      if (isVisible) {
        const timeSpent = Date.now() - startTime;
        this.trackEvent('time_on_page', { duration: timeSpent });
      }
    };

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        if (isVisible) {
          trackTime();
          isVisible = false;
        }
      } else {
        startTime = Date.now();
        isVisible = true;
      }
    });

    window.addEventListener('beforeunload', trackTime);
  }

  private async sendData(endpoint: string, data: any) {
    // Skip sending data in development mode
    if (this.isDevelopment) {
      console.log('[StatfulAnalytics] Development mode - data:', data);
      return;
    }

    try {
      const response = await fetch(`${this.apiEndpoint}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type'
        },
        body: JSON.stringify(data),
        keepalive: true,
        mode: 'cors'
      });

      if (!response.ok) {
        console.warn('[StatfulAnalytics] Request failed:', response.status);
      }
    } catch (error) {
      console.warn('[StatfulAnalytics] Failed to send data:', error);
    }
  }

  private generateSessionId(): string {
    let sessionId = sessionStorage.getItem('statful_session_id');
    if (!sessionId) {
      sessionId = 'sess_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
      sessionStorage.setItem('statful_session_id', sessionId);
    }
    return sessionId;
  }

  private isOutboundLink(url: string): boolean {
    try {
      const link = new URL(url, window.location.origin);
      return link.hostname !== window.location.hostname;
    } catch {
      return false;
    }
  }
}

// Create and export instance
export const Analytics = new StatfulAnalytics();