import { PrettyChatWindow,} from 'react-chat-engine-pretty';


const ChatsPage = (props) => {
    return( <div style= {{ height: '100vh'}}>
        <PrettyChatWindow
        projectId='6c51a87a-09f2-415e-a872-8afb1f4493d7'
        username={props.user.username}
        secret={props.user.secret}
        style={{height : '100%'}}
        />
    </div>
    )
}

export default ChatsPage