const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase)=>{
    if(phase === PHASE_DEVELOPMENT_SERVER){
        return {
            env: {
                mongodb_username: 'ilan_parsotamo',
                mongodb_password: '4LspPjb65D10Anc8',
                mongodb_cluster: 'cluster0',
                mongodb_database: 'next-blog-dev'
            }
        }
    }
    return {
        env: {
            mongodb_username: 'ilan_parsotamo',
            mongodb_password: '4LspPjb65D10Anc8',
            mongodb_cluster: 'cluster0',
            mongodb_database: 'next-blog'
        }
    }
}