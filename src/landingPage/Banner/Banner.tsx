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
        <button onClick={this.callApi}>Look in console log for the information from the weather api. </button>
        <p>This is the Banner area.</p>
      </div>
    );
  }
}

export default Banner;