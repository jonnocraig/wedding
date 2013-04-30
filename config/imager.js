module.exports = {
  variants: {
    article: {
      resize: {
        detail: "400x440"
      },
      crop: {
        thumb: "100x100"
      },
      resizeAndCrop: {
        mini: {resize: "1000x1000", crop: "900x900"}
      }
    },

    gallery: {
      crop: {
        thumb: "100x100"
      }
    }
  },

  storage: {
    Rackspace: {
      auth: {
        username: "USERNAME",
        apiKey: "API_KEY",
        host: "lon.auth.api.rackspacecloud.com"
      },
      container: "CONTAINER_NAME"
    },
    S3: {
      key: process.env.S3_KEY,
      secret: process.env.S3_SECRET,
      bucket: 'publicjocrimages',
      region: 'Ireland'
    }
  },

  debug: true
}
