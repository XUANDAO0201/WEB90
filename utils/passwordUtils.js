import bcrypt from 'bcrypt';

const saltRound = process.env.SALT_ROUND;
const passwordUtils = {
    hashPassword: (rawPassword) => {
        let salt = bcrypt.genSaltSync(saltRound);

        let hashedPassword = bcrypt.hashSync(rawPassword, salt);

        return hashedPassword;
    },

    comparePassword:(password, hashedPassword) => {
        return bcrypt.compareSync(password, hashedPassword)
    }
}

export default passwordUtils;