module.exports = {
    plugins: [
        {
            resolve: `gatsby-theme-gine-blog`,
            options: {
                configTable: "https://www.notion.so/a12c985b8ddb441fbd1bab6d37c36837?v=4064a8b1dcbc4ba4a8b7d0044e03eeaf"
            }
        },
        {
            resolve: `gatsby-source-notion-database`,
            options: {
                configTable: "https://www.notion.so/f1a2e66ac7d74823b4a2c25761e2b07c?v=8a80d44ecbf34d2dbd333b34fc32b47c"
            }
        }
    ],
}
