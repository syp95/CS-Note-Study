var passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy;

passport.use(
    new LocalStrategy(function (username, password, done) {
        User.findOne({ username: username }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (!user.validPassword(password)) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    }),
);

// AuthService (?)

const googleProvider = auth.GoogleAuthProvider();
const facebookProvider = auth.FacebookAuthProvider();
const githubProvider = auth.GithubAuthProvider();

class AuthService {
    getProvider(providerName) {
        switch (providerName) {
            case 'Google':
                return googleProvider;
            case 'Facebook':
                return facebookProvider;
            case 'Github':
                return githubProvider;
            default:
                throw new Error(`not supported provider: ${providerName}`);
        }
    }
}
