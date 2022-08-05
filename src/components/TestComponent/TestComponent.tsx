import React from 'react';

export type TestComponentProps = {
    text: string
}

export default class TestComponent extends React.PureComponent<TestComponentProps> {
    constructor(props: TestComponentProps) {
        super(props);
    }
    
    render() {
        return (
            <h1>
                {this.props.text}
            </h1>
        )
    }
}