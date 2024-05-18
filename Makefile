.PHONY: build-latest vrt

build-latest:
	docker build -f docker-image-build.Dockerfile -t derpfad:latest .

vrt: startvrtsetup stopvrtsetup

startvrtsetup: build playwright-image runservices

build:
	docker build -f docker-image-build.Dockerfile -t derpfad .
playwright-image:
	docker build -f docker-image-playwright.Dockerfile -t playwright .
runservices:
	docker-compose -f docker-compose.yaml up -d

stopvrtsetup: waitforexit shutdownservices

waitforexit:
	docker wait derpfad-playwright-1

shutdownservices:
	docker-compose -f docker-compose.yaml down