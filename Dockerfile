FROM denoland/deno:latest AS build

# Install Git
USER root
RUN apt-get update && apt-get install -y git

# Clone the GitHub repository
RUN git clone --depth 1 https://github.com/GabsEdits/dock-links.git /app

WORKDIR /app

# Install dependencies and build
RUN deno task build

EXPOSE 4173

ENTRYPOINT ["deno", "task", "preview"]
