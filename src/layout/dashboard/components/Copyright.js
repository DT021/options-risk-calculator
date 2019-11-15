import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import React from 'react'

const Copyright = () => (
  <>
    <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
      {'Copyright © '}
      <Link color="inherit" href="https://igu.io/">
        igu.io
      </Link>{' '}
      {new Date().getFullYear()}
      {'. Proudly built with '}
      <Link color="inherit" href="https://material-ui.com/">
        Material-UI.
      </Link>
    </Typography>

    <Typography variant="body2" color="textSecondary" align="center" gutterBottom>
      THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
    </Typography>
  </>
)

export default Copyright
