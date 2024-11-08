import React, { FunctionComponent } from 'react'
import { Box } from '@mui/material'

interface INotifyBody {
    message: string
}

export const NotifyBody: FunctionComponent<INotifyBody> = ({ message }) => {
    return <Box>{message}</Box>
}
