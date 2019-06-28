const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Anne Dominique's Personal blog", // <title>
  shortSiteTitle: "Anne Dominique's Personal blog", // <title> ending for posts and pages
  siteDescription: "Anne Dominique's Personal blog",
  siteUrl: "https://www.anne-asis.me",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "Anne Asis",
  authorTwitterAccount: "bcozicanne",
  // info
  infoTitle: "Anne Asis, M.D.",
  infoTitleNote: "Personal Blog",
  // manifest.json
  manifestName: "anne asis personal blog",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "annedkasis@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/annedkasis" },
    { name: "twitter", url: "https://twitter.com/bcozicanne" },
    { name: "facebook", url: "https://www.facebook.com/annedkasis" }
  ]
};
