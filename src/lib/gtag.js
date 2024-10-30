// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

export const pageview = (url) => {
    window.gtag('config', GA_TRACKING_ID, {
      page_path: url,
    })
  }
  
  // Eventos específicos
  export const trackProjectClick = (projectName, linkType) => {
    window.gtag('event', 'project_interaction', {
      event_category: 'Projects',
      event_label: projectName,
      link_type: linkType // 'github' o 'live'
    })
  }
  
  export const trackNavigation = (section) => {
    window.gtag('event', 'navigation', {
      event_category: 'Navigation',
      event_label: section
    })
  }
  
  export const trackSectionView = (sectionName, timeSpent) => {
    window.gtag('event', 'section_view', {
      event_category: 'Engagement',
      event_label: sectionName,
      value: timeSpent
    })
  }
