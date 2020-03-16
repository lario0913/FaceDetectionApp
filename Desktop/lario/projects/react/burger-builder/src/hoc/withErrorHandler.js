import React, { Component } from 'react'
import Auxilliary from './Auxilliary'
import Modal from '../components/UI/Modal/Modal'


const withErrorHandler =( WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error:null
        }
        
        componentDidMount () {
            // this.reqInterceptor =axios.interceptors.request.use(req => {
            //     this.setState({error: false})
            //     return req
            // })

            // this.resInterceptor = axios.interceptors.response.use(res => res, error=>{
            //     this.setState({error: error})
            // })
        }

        componentWillUnmount () {
            // axios.interceptors.request.eject(this.reqInterceptor)
            // axios.reqInterceptor.response.eject(this.resInterceptor)
        }

        errorConfirmedHandler = () => {
            this.setState({error: null})
        }

        render () {
            return (
                <Auxilliary>
                    <Modal show={this.state.error} clicked={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Auxilliary>
                
            )
        }
    }
}

export default withErrorHandler