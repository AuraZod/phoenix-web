/**
 * Phoenix Reaper Esports - Configuration File
 * Made by AuraZod
 * All rights reserved by Phoenix Reaper Esports
 */

const SITE_CONFIG = {
  // Social Media Links
  socials: {
    discord: "https://discord.gg/phoenix-reaper-esports-1274787524895572111",
    x: "https://x.com/Phoenix_esp1",
    instagram: "https://www.instagram.com/phoenixesports.in",
    youtube: "https://www.youtube.com/@PhoenixEsports-in"
  },
  
  // Tournament Discord Channels
  tournaments: {
    phoenixRisesAgain: "https://discord.com/channels/1274787524895572111/1422709480814284831",
    reapersWinterSeriesS2: "https://discord.com/channels/1274787524895572111/1315214569781727233",
    reapersCupS1: "https://discord.com/channels/1274787524895572111/1274787525977968694",
    duoReapersBattle: "https://discord.com/channels/1274787524895572111/1325795604143538268"
  },
  
  // Contact Information
  contact: {
    email: "ceo@phoenixreaperesports.com"
  },
  
  // Meta Information for SEO/Social Sharing
  meta: {
    siteName: "Phoenix Reaper Esports",
    description: "We are Phoenix Reaper Esports, The Wings of Fire & Deathbringers. Join Us today to become part of this wonderful Fam. Together Lets #IgniteTheFlames",
    ogImage: "./assets/images/socialbanner.jpg",
    year: "2024"
  }
};

// Apply links dynamically to the page
function applyLinks() {
  // Apply social links
  const xLinks = document.querySelectorAll('a[href*="facebook.com/phoenixreaperesports"]');
  xLinks.forEach(link => {
    link.href = SITE_CONFIG.socials.x;
  });
  
  const discordLinks = document.querySelectorAll('a[href*="discord.gg/phoenix-reaper-esports"]');
  discordLinks.forEach(link => {
    link.href = SITE_CONFIG.socials.discord;
  });
  
  const instagramLinks = document.querySelectorAll('a[href*="instagram.com/phoenixesports"]');
  instagramLinks.forEach(link => {
    link.href = SITE_CONFIG.socials.instagram;
  });
  
  const youtubeLinks = document.querySelectorAll('a[href*="youtube.com/@PhoenixEsports"]');
  youtubeLinks.forEach(link => {
    link.href = SITE_CONFIG.socials.youtube;
  });
  
  // Apply email links
  const emailLinks = document.querySelectorAll('a[href*="mailto:aura@phoenixreaperesports.com"]');
  emailLinks.forEach(link => {
    link.href = `mailto:${SITE_CONFIG.contact.email}`;
  });
}

// Run on DOM load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', applyLinks);
} else {
  applyLinks();
}

