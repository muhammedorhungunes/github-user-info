import {connect} from "react-redux";
import DooView from "../components/DooView";

const mapStateToProps = state => ({
    visibilityMode: state.visibilityMode
})

const mapDispatchToProps = dispatch => ({

});

export default DooViewContainer = connect(mapStateToProps,mapDispatchToProps)(DooView)