/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        url: 'https://cars-by-api-ninjas.p.rapidapi.com/v1/cars',
        X_RapidAPI_Key: '5cd6d7215bmsh5dcea764a05ee20p1ac13ejsnbe236c43938c',
        IMAGIN_API_KEY: 'pksoc',
      },
      images: {
        domains: ["cdn.imagin.studio"]
    }
}

module.exports = nextConfig
