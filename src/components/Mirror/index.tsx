import React from "react";

interface MirrorProps extends React.HTMLAttributes<HTMLCanvasElement> {}

function Mirror(props: MirrorProps) {
  const canvas = React.useRef<HTMLCanvasElement>(null);

  React.useEffect(() => {
    const c = canvas.current;
    if (!c) return;

    const ctx = c.getContext("2d");
    if (!ctx) return;

    setInterval(() => {
      const mirrorFrom = document.getElementById(
        "doom-fire"
      ) as HTMLCanvasElement;
      const ctxMirror = mirrorFrom.getContext("2d");
      if (!ctxMirror) return;

      const { width, height } = mirrorFrom;
      c.width = width;
      c.height = height;

      ctx.save();
      ctx.scale(-1, 1);
      ctx.filter = "blur(10px) grayscale(0.75) brightness(1.2)";
      ctx.drawImage(mirrorFrom, -width, 50);
      ctx.restore();
    }, 16);
  }, [props]);

  return <canvas ref={canvas} {...props} />;
}

export default Mirror;
