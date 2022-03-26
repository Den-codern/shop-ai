import {format} from 'date-fns'
import styles from './Footer.module.css'
import { FooterProps } from './Footer.props'
import cn from 'clsx'
function Footer({className,...props}:FooterProps) {
    return (
        <>
            <footer className={cn(className,styles.footer)} {...props} >
                <div>ShopAi © 2020 - {format(new Date(), "yyyy")} Все права защищены</div>
            </footer>
        </>
    )
}

export default Footer