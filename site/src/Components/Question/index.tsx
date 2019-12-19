import React from 'react'

interface QuestionProps {
    text: string
}

class Question extends React.Component<QuestionProps> {

    constructor(props: any) {
        super(props)
    }

    render() {
        return(<div>
            {this.props.text}
        </div>)
    }
}

export default Question