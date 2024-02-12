# Weather Forecast Application, Currency and MockAPi

## Admin details
1) Username: `Diyar`
2) Password: `Diyar_11`
   
## Installation

### Prerequisites

- Node.js installed on your system.

### Setup Instructions

#### Clone the Repository

1) Open the cmd:
2) `git clone https://github.com/WebDiyar/assignment_3_nodejs.git`
3) `cd assignment_3_nodejs`
4) `npm install`
5) `npm start` or `node app.js`

#### Configuration

- Ensure you have the following API keys:
  - Rapid API(currency):  [CurrencyAPI](https://rapidapi.com/TockaAyman/api/currencyconverter9)
  - Weather API: `30cf23e4108bbec1a6fc67d3b05b31c6` [OpenWeatherMap](https://openweathermap.org/)
  - MockAPi: [MockAPi](https://6559fa956981238d054d0040.mockapi.io/users)
 
# Application Routes

This Node.js application defines several routes for different functionalities. Below are the routes and their descriptions:

## Routes

- `/`: 
  - Description: User login
  - Use: `app.use("/", loginRouter)`
  
- `/register`: 
  - Description: User registration
  - Use: `app.use("/", registerRouter)`

- `/admin`: 
  - Description: Admin section
  - Use: `app.use("/admin", adminRouter)`

- `/user`: 
  - Description: User section
  - Use: `app.use("/user", userRouter)`

- `/weather`: 
  - Description: Weather API
  - Use: `app.use("/", weatherApi)` (1st API)

- `/currency`: 
  - Description: Currency API
  - Use: `app.use("/", currencyApi)` (2nd API)

- `/mockapi`: 
  - Description: MockAPI
  - Use: `app.use("/", mockApi)` (3nd API)
  
- `/history`: 
  - Description: History
  - Use: `app.use("/", history)`
