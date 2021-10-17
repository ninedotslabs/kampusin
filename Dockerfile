FROM alpine:latest

RUN set -eux \
    & apk add \
        --no-cache \
        nodejs \
        yarn

WORKDIR /app

COPY . /app/

RUN yarn install

RUN addgroup -S appgroup && adduser -S appuser -G appgroup
RUN chown -R appuser:appgroup /app
USER appuser

EXPOSE 3000
CMD ["yarn","dev"]