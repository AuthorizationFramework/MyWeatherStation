import * as React from 'react';

interface IProps {
  notYetDefined?: string;
}

interface IState {
  noDefinition?: number;
}

class UseOne extends React.Component<IProps, IState> {
  public static defaultProps: Partial<IProps> = {
    notYetDefined: ""
  };

  public state: IState = {
    noDefinition: 0
  };
  /*
  example function 
  public increase = () => {
    const countBy: number = this.props.countBy!;
    const count = this.state.count + countBy;
    this.setState({ count });
  };
  */

  public render() {
    return (
      <div>
        <div className='use1-container'>
        <p>This is the UseOne area.</p>
        </div>
       
      </div>
    );
  }
}

export default UseOne;