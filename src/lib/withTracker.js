import React from 'react';
import { TC_Wrapper } from './index';

function withTracker(WrappedComponent, options = {}) {
    
  const trackPage = page => {    
      TC_Wrapper.getInstance().setTcVars(options.tcReloadOnly);
      TC_Wrapper.getInstance().reloadAllContainers();
  };

  // eslint-disable-next-line
  const HighOrderComponent = class extends Component {

      componentDidMount() {
          // eslint-disable-next-line
          const page = this.props.location.pathname + this.props.location.search;
          trackPage(page);
      }

      componentDidUpdate(prevProps) {
          const currentPage = prevProps.location.pathname + prevProps.location.search;
          const nextPage = this.props.location.pathname + this.props.location.search;

          if (currentPage !== nextPage) {
              trackPage(nextPage);
          }
      }

      render() {
          return (<WrappedComponent {...this.props} />);
      }
  };

  return HighOrderComponent;
};

export default withTracker;