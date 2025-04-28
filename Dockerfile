FROM denoland/deno:latest AS build

USER root
RUN apt-get update && apt-get install -y git

RUN git clone --depth 1 https://github.com/GabsEdits/dock-links.git /app

WORKDIR /app

RUN deno task build

EXPOSE 4173

ENTRYPOINT ["deno", "task", "preview"]
