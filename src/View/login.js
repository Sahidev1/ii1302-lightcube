function Login() {
    return (
        <div>
            <div>
                <h2>Log In To IoT Lightcube</h2>
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
                        <td></td>
                        <td>
                            <input type="submit" value="Login"/>
                            <input type="submit" value="Register"/>
                        </td>
                    </tr>
                  </tbody>
                </table>
            </div>
        </div>
    )
}
export default Login