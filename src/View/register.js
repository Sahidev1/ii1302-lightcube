function Register() {
    return (
        <div>
            <div>
                <h2>Create Your Account</h2>
            </div>
            <div>
                <table align="center">
                  <tbody>
                    <tr>
                        <td align="center">Username</td>
                        <td>
                            <input type="text" placeholder="Enter your username"/>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">Password</td>                            
                        <td>
                            <input type="password" placeholder="Enter your password"/>
                        </td>
                    </tr>
                    <tr>
                        <td align="center">Confirm Password</td>
                        <td>
                            <input type="password" placeholder="Enter your password again"/>
                        </td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>
                            <input type="submit" value="Create Account"/>
                        </td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
    )
}
export default Register