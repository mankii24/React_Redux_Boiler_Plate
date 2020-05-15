import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { updateSetUser, fetchApiCall } from '../../redux/actions/actions'
import './HelloWorld.scss';

const HelloWorld = (props) => {
    useEffect(() => {
        const user = {
            name : 'React Redux'
        }
        props.setUser(user);
        props.fetchApiCall();
    },[]);
return (<div className="global">Hellow World <span>{props.currentUser.name} {props.currentUserId}</span></div>);
};

HelloWorld.propTypes = {
    setUser: PropTypes.func.isRequired,
    fetchApiCall: PropTypes.func.isRequired,
    currentUser: PropTypes.object.isRequired, 
    currentUserId: PropTypes.number
}

HelloWorld.defaultProps = {
    currentUserId: 0
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser,
        currentUserId: state.currentUserId
    }
}
function mapDispatchToProps(dispatch) {
    return {
        setUser: (userObj) => {
            dispatch(updateSetUser(userObj))
        },
        fetchApiCall: () => dispatch(fetchApiCall())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HelloWorld);