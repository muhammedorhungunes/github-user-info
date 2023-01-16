import {connect} from "react-redux";
import SooView from "../components/SooView";
import {show,hide } from '../store/actions/VisibilityMode'

const mapStateToProps = state => ({
    visibilityMode: state.visibilityMode
})

const mapDispatchToProps = dispatch => (
    {
        showView: () => dispatch(show()),
        hideView: () => dispatch(hide()),
    }
)

export default SooViewContainer = connect(mapStateToProps,mapDispatchToProps)(SooView)