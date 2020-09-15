module.exports = {
    siteMetadata: {
        description: "Personal portfolio of Saleheen Ahmed",
        locale: "en",
        title: "Saleheen S. Ahmed",
    },
    plugins: [
        {
            resolve: "@wkocjan/gatsby-theme-intro",
            options: {
            basePath: "/",
            contentPath: "content/",
            showThemeLogo: false,
            theme: "gh-inspired",
            },
        },
    ],
}