import * as React from 'react';

import './app.styl';

class App extends React.Component<any, any> {

    render() {
        return (
            <div className={'app'}>
                Hello world <span className={'title'}>Dusk App</span>！
                <div className={'radar'}>
                    <div className={'fan'}/>
                </div>
            </div>
        );
    }

}

export default App;
