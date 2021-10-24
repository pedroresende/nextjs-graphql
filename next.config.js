module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "http://localhost:3000/:path*",
      },
    ]
  },
  async headers() {
    return [
      {
        source: "/api/graphql",
        headers: [
          {
            key: "access-control-allow-methods",
            value: "POST",
          },
          {
            key: "access-control-allow-origin",
            value: "*",
          },
          {
            key: "access-control-allow-credentials",
            value: "true",
          },
        ],
      },
    ]
  },
}
