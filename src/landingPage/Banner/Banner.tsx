import * as React from 'react';
import weatherCall from '../../Calls/baseWeatherCall'
interface IProps {
  notYetDefined?: string;
}

interface IState {
  noDefinition: number;
  apiInformation?: JSON;
}

class Banner extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    notYetDefined: "",
  };

  public state: IState = {
    noDefinition: 0,
    apiInformation: JSON
  };
  public callApi = () => {
    weatherCall('raleigh')
    // this.setState({ apiInformation });
  };

  public render() {
    return (
      <div>
		<div className='header'>
This will be the header right above the banner. Style will come soon.
			</div>
			<div className='bannerInner'>
			This is the banner image and text..Will come soon.
			<button onClick={this.callApi}>Look in console log for the information from the weather api. </button>
        <p>This is the Banner area.</p>
			</div>
      </div>
    );
  }
}

export default Banner;