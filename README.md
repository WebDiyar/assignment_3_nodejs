# Weather Forecast Application - README.md

## Overview

Welcome to the Weather Forecast Application, an interactive tool designed to provide real-time weather forecasts. This application utilizes three different APIs to deliver accurate weather information in a user-friendly format. The code is designed with a focus on cleanliness and efficiency, ensuring a seamless user experience.

## Admin
1. Username: ##Diyar
2. Password: ##Diyar_11

## Features

- Real-time weather forecasting.
- Integration with three distinct APIs for comprehensive data.
- User-friendly interface with required input fields.
- Local server setup (Port 3000).

## Installation

### Prerequisites

- Ensure Node.js is installed on your system.

### Setup Instructions

#### Clone the Repository

1. Open the terminal.
2. Run `git clone https://github.com/WebDiyar/weatherapp_nodejs.git`.
3. Navigate to the project directory: `cd weatherapp_nodejs`.
4. Install dependencies: `npm install`.
5. Start the server: `npm start`.

### Configuration

- Ensure you have the following API keys:
  - Currency API: `cur_live_ZBbhBB2Z8iayiYpu9IPGxFQqLz5tApxa6VROY1bS` ([CurrencyAPI](https://app.currencyapi.com/dashboard))
  - Weather API: `30cf23e4108bbec1a6fc67d3b05b31c6` ([OpenWeatherMap](https://openweathermap.org/))
  - Google Maps API: `AIzaSyAycQCTMjhQO9jqkQYomT6pcqEp-bMnrI0` ([Google Maps](https://www.google.com/maps))

### Project Structure

- The project comprises two main folders and four essential files.
- The primary file is `app.js`, which configures an Express server to run on port 3000.

### Starting the Application

- Navigate to the project root directory.
- Execute `npm start` in your terminal to start the server.
- Access the application through [http://localhost:3000](http://localhost:3000) in your web browser.

## Usage

- **Input Requirements**: Fill all three input fields in the application interface to receive weather forecasts.
- **API Integration**: The application integrates the three mentioned APIs seamlessly to fetch and display weather data and currency.

## Design Decisions

- **Separation of Concerns**: The core logic resides within the `app.js` file, while HTML files are dedicated solely to presentation, ensuring a clear separation between logic and presentation layers.
- **API Utilization**: The selected APIs offer a comprehensive dataset, enhancing the accuracy and reliability of weather forecasts and currency.
- **Server Configuration**: Running on a local server (Port 3000) facilitates easy setup and testing, making it convenient for users to deploy and use the application locally.

## Contributors

- Diyar Amangeldi
- SE-2202