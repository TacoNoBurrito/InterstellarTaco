self.__uv$config = {
    prefix: '/a/',
    bare: 'http://129.80.249.120:8080/v/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/m/handler.js',
    bundle: '/m/bundle.js',
    config: '/m/config.js',
    sw: '/m/uvsw.js',
};