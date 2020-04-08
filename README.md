# Naya studio assignment

Onboarding experience that allows us to capture more information from designers, makers and fabrication shops during the signup process.

## Installation

Clone and run the command to install naya-task and dependencies.

```bash
npm install i
```

## Usage

```Node.js

For signup

router.post('/makerRegister') # returns 'maker profile'
router.post('/designerRegister') # returns 'Designer profile'
router.post('/bothRegister') # returns 'Both profile'

For login

router.post('/login') # returns 'create token if credentials matches perfectly'

For profile/Dashboard

router.get('/maker-profile/:id') # returns 'return dashboard page with managing token after login'
router.get('/designer-profile/:id') # returns 'return dashboard page with managing token after login'
router.get('/designer-profile/:id') # returns 'return dashboard page with managing token after login'


```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
