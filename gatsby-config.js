/*
 * Human Cell Atlas
 * https://www.humancellatlas.org/
 *
 * Gatsby configuration file.
 */

module.exports = {
    siteMetadata: {
        title: 'HCA Data Portal'
    },
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                path: `${__dirname}/markdown`,
                name: "markdown-pages",
            }
        },
        {
            resolve: 'gatsby-plugin-react-css-modules',
            options: {
                filetypes: {
                    '.scss': {syntax: 'postcss-scss'},
                },
                // Exclude global styles from the plugin
                exclude: '\/global\/'
            }
        },
        `gatsby-transformer-remark`,
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-plugin-typography',
            options: {
                pathToConfigModule: 'src/utils/typography.js',
            }
        }
    ]
};
