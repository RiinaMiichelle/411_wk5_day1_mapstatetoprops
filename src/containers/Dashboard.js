import { connect } from 'react-redux'
import Dashboard from '../components/Dashboard';


const mapStateToProps = (state) => {
  return {
      cars: state.cars,
      user: {
        username: 'test-user-1',
        email: 'test-user@example.com'
    }
  }
}

export default connect(mapStateToProps)(Dashboard)
