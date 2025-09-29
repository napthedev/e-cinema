# E-Cinema Streaming Sources

This document contains the list of external streaming sources used by the E-Cinema application for movie and TV show content.

## Overview

E-Cinema integrates with multiple streaming providers to offer a comprehensive viewing experience. These sources provide embedded video players and streaming capabilities for movies and TV shows.

## Streaming Sources

### 1. 2embed.cc
- **URL**: https://www.2embed.cc/
- **Type**: Video embedding service
- **Description**: A popular embedding platform that provides access to a wide variety of movies and TV shows. Offers reliable streaming with multiple server options.
- **Features**: 
  - Multiple video quality options
  - Fast loading times
  - Wide content library
  - Mobile-friendly player

### 2. SuperEmbed Stream
- **URL**: https://www.superembed.stream/
- **Type**: Streaming embed provider
- **Description**: A high-quality streaming service that specializes in providing embedded video players for movies and series. Known for its stable streaming and good video quality.
- **Features**:
  - HD streaming support
  - Minimal buffering
  - Clean player interface
  - Subtitle support

### 3. VidSrc.me
- **URL**: https://vidsrc.me/
- **Type**: Video source aggregator
- **Description**: A reliable video source provider that aggregates content from multiple streaming platforms. Offers excellent uptime and content availability.
- **Features**:
  - Multiple source fallbacks
  - Fast content discovery
  - Regular content updates
  - Cross-platform compatibility

### 4. MoviesAPI Club
- **URL**: https://moviesapi.club/
- **Type**: Movie streaming API
- **Description**: An API service that provides access to movie streaming links and metadata. Useful for programmatic access to movie content and information.
- **Features**:
  - RESTful API interface
  - Movie metadata included
  - Regular database updates
  - Developer-friendly documentation

## Usage Notes

- These sources are used as fallback options to ensure content availability
- The application may rotate between sources for optimal performance
- All sources are external and subject to their own terms of service
- Content availability may vary by region and source

## Important Disclaimers

⚠️ **Legal Notice**: This application is for educational and demonstration purposes. Users should ensure they comply with local laws and the terms of service of these streaming providers.

⚠️ **Availability**: External sources may experience downtime or changes to their service. The application includes fallback mechanisms to handle such situations.

## Development Notes

When working with these sources in the application:

1. Always implement proper error handling for failed requests
2. Consider implementing source rotation for better reliability
3. Respect rate limits and terms of service of each provider
4. Monitor source availability and update as needed

## Last Updated

This document was last updated on September 29, 2025.