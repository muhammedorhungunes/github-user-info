import {connect} from "react-redux"
import GitUserInfoView from '../components/GitUserInfoView'

const mapStateToProps = state => ({
    gitUser: state.gitUser
})

const mapDispatchToProps = dispatch => ({

})

export default GitUserInfoViewContainer = connect(mapStateToProps,mapDispatchToProps)(GitUserInfoView)