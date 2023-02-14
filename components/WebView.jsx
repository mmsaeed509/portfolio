const WebView = ({ alt, src, url }) => (
  <div className="flex-04 relative overflow-y-auto aspect-video rounded-md border-2 border-text">
    <div className="sticky top-0 bg-base flex gap-2 px-2 py-1 items-center border-b-text border">
      <div className="flex items-center gap-1 min-w-max rounded-md">
        <Btn bgColor="#FF605C" />
        <Btn bgColor="#FFBD44" />
        <Btn bgColor="#00CA4E" />
      </div>
      <div className="bg-crust text-sm py-1 px-2 rounded-md w-full">
        <span className="text-overlay0">https://</span>
        {url.replace("https://", "")}
      </div>
    </div>
    <div className="">
      <img width="400" height="800" alt={alt} className="w-full" src={src} loading="lazy" />
    </div>
  </div>
);

const Btn = ({ bgColor }) => (
  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: bgColor }} />
);

export default WebView;
