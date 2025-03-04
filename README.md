<div align="center">
<h1>Dock Links</h1>
<p>Quick access to your links, securely and scalable.</p>
<small>Based on [Quick Links](https://github.com/GabsEdits/quick-links), but Docker-only.</small>
</div>

## Intention

It was created to provide an even simpler way to use Quick Links, but requiring only a Dockerfile
and Environment Variables.

It was tested with [Coolify](https://coolify.io).

## Usage (Coolify)

I've made a video showing each and every detail of the application setup and usage.

https://github.com/user-attachments/assets/a0f39466-cd10-4e29-9546-6142c46407ff

### Creating the new application

1. Create a new application in Coolify.
2. Choose "Dockerfile" as the source.
3. Add the following Dockerfile to your application:

```dockerfile
FROM denoland/deno:latest AS build

USER root
RUN apt-get update && apt-get install -y git

RUN git clone --depth 1 https://github.com/GabsEdits/dock-links.git /app

WORKDIR /app

RUN deno task build

EXPOSE 4173

ENTRYPOINT ["deno", "task", "preview"]
```

### Environment Variables

Now that you have set up your application, you can add the following environment variables:

```
VITE_PASSWORD_KEY=YOUR_PASSWORD_KEY
VITE_TITLE="YOUR_TITLE"
VITE_CARDX_SUBJECT="YOUR_SUBJECT"
VITE_CARDX_DETAILS="YOUR_DETAILS"
VITE_CARDX_DATE="YOUR_DATE"
VITE_CARDX_COLOR="YOUR_COLOR"
VITE_LINK_COUNT=THE_AMOUNT_OF_LINKS
VITE_AUTHOR_NAME=YOUR_NAME
VITE_AUTHOR_LINK=YOUR_WEBSITE
VITE_LINKX=YOUR_LINK
```

The `VITE_CARDX` and `VITE_LINKX` environment variables are used for each card.
You need to replace them with the number of cards you want to create. For example,
if you want to create 3 cards, you would add the following environment variables:

```
VITE_CARD1_SUBJECT="Card 1 Subject"
VITE_CARD1_DETAILS="Card 1 Details"
VITE_CARD1_DATE="Card 1 Date"
VITE_CARD1_COLOR="Card 1 Color"
VITE_CARD2_SUBJECT="Card 2 Subject"
VITE_CARD2_DETAILS="Card 2 Details"
VITE_CARD2_DATE="Card 2 Date"
VITE_CARD2_COLOR="Card 2 Color"
VITE_CARD3_SUBJECT="Card 3 Subject"
VITE_CARD3_DETAILS="Card 3 Details"
VITE_CARD3_DATE="Card 3 Date"
VITE_CARD3_COLOR="Card 3 Color"
VITE_LINK1="https://example.com/1"
VITE_LINK2="https://example.com/2"
VITE_LINK3="https://example.com/3"
VITE_LINK_COUNT=3
```

And you will also rewrite the amount of links you have in `VITE_LINK_COUNT`. For the example
above, we have 3 total links, which means `VITE_LINK_COUNT=3`.

You will also need to replace each variable with the appropriate value. For example, if your
name is John, you will replace `VITE_AUTHOR_NAME=YOUR_NAME` with `VITE_AUTHOR_NAME=John`.

## Demo Configuration

If you would like a Demo configuration (for the environment variables), you can use the following:

```
VITE_PASSWORD_KEY=my-lovely-password
VITE_TITLE="My Awesome Links"
VITE_AUTHOR_NAME="John"
VITE_AUTHOR_LINK="mailto:john@example.com"
VITE_CARD1_SUBJECT="Card 1 Subject"
VITE_CARD1_DETAILS="Card 1 Details"
VITE_CARD1_DATE="Card 1 Date"
VITE_CARD1_COLOR="Card 1 Color"
VITE_CARD2_SUBJECT="Card 2 Subject"
VITE_CARD2_DETAILS="Card 2 Details"
VITE_CARD2_DATE="Card 2 Date"
VITE_CARD2_COLOR="Card 2 Color"
VITE_CARD3_SUBJECT="Card 3 Subject"
VITE_CARD3_DETAILS="Card 3 Details"
VITE_CARD3_DATE="Card 3 Date"
VITE_CARD3_COLOR="Card 3 Color"
VITE_LINK1="https://example.com/1"
VITE_LINK2="https://example.com/2"
VITE_LINK3="https://example.com/3"
```
