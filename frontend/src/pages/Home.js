import React, { useEffect } from 'react';
import { Typography,Toolbar } from '@mui/material';
import {useDispatch,useSelector} from 'react-redux';
import {allAccountHolders} from '../statemanager/actions/accountHoders';


function Home() {
    const dispatch = useDispatch();
    const accountHolders= useSelector((state)=>state.allAccountHoders.items);
    useEffect(()=>{
        dispatch(allAccountHolders());
    },[]);
    return (
        <div>
            <Toolbar />
            {
                accountHolders.map((acholder)=>(
                    <Typography paragraph>
                        {acholder.FullName}
                    </Typography>
                ))
            }
            <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                posuere sollicitudin aliquam ultrices sagittis orci a.
            </Typography>
        </div>
    )
}




export default Home;