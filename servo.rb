require 'webrick'
include WEBrick

class NonCachingFileHandler < HTTPServlet::FileHandler
  def prevent_caching(res)
    res['ETag']          = nil
    res['Last-Modified'] = Time.now + 100**4
    res['Cache-Control'] = 'no-store, no-cache, must-revalidate, post-check=0, pre-check=0'
    res['Pragma']        = 'no-cache'
    res['Expires']       = Time.now - 100**4
  end

  def do_GET(req, res)
    super
    prevent_caching(res)
  end
end

local_magia = HTTPServer.new(
  :Port => 8080,
  :DocumentRoot => "."
)

local_magia.mount("/font-viewer", NonCachingFileHandler, './')

trap("INT") do
  local_magia.shutdown
end

local_magia.start
