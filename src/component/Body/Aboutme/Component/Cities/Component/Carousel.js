import React, {useEffect, useState} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import '../style.css'
import Lahore from '../../../../../../assets/Cities/Lahore.jpeg'
import Karachi from '../../../../../../assets/Cities/karachi.jpeg'
import Fasilabad from '../../../../../../assets/Cities/faisalabad.jpeg'
import Islamabad from '../../../../../../assets/Cities/islamabad.jpeg'
import 'slick-carousel/slick/slick-theme.css';
import {ImageURL, URI} from "../../../../../../variables";
import axios from "axios";
import {Link} from "react-router-dom";
const AboutCities = [
    {
        id: '1',
        name:'lahore',
        img: Lahore,
        description:'Uncle Fixer was founded with the goal of providing outstanding Handyman servicesin Lahore. Our goal is to give you with low-cost, high-quality handyman services right at your door.'

    }, {
        id: '2',
        name:'Karachi',
        img: Karachi,
        description:'Looking for reliable Handyman, Renovation, and Maintenance & Repair Services in Karachi? Uncle Fixer provides you high-quality and dependable repair services in Karachi. You may discover the best and most dependable handyman services at reasonable prices via us.'

    }, {
        id: '4',
        name:'Rawalpindi',
        img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUUFBcVFBUXFxcZGBgeGhoZGhoZGhogGh0ZHRocHRwaIC8kIiEpIRkeJTYkKS0vMzMzHSI4PjgyPSwyMy8BCwsLDw4PHhISHTQqIyk0OjIyMjo6NDIyMjIyMjI0MzIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMv/AABEIAJ8BPQMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAIFBgABB//EAEEQAAIBAgQEAwYDBgUCBwEAAAECEQADBBIhMQVBUWETInEGMoGRobFCwfAUI1Ji0eEzcoKSshXxByRDc6LC0lP/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQIDBAX/xAAnEQACAgICAgEEAwEBAAAAAAAAAQIRAyESMUFREwQiYZEUgaFxMv/aAAwDAQACEQMRAD8Aorqan1P3oZSm7qan1NDKV7FnmC+Wuy0fLXZadhQHLXZaNlrstFjoDlrstGy12WgABSuy0fLXmSgKA5a7LRsldkosVAMldko+Suy0WFAMleZKPkrslFhQDJXoSj5K9CUWFAMtM4TCM4uZUZ8qScq5o1Gp6c6JhcE9xwltSzHkPv6VvOB8LbD2SjWXZrjAu2a0OYUAS+wk6nvWGbKoqvJrjxtu/B82y1EJWj4rwK4rF7dq6EOsHIxXqPIxkb8uR6VSBN/1yFaRyqXRMsbj2L5K8yUyUqJSrsigGSuyUbLXmWix0CyV2SjZa7LRYUByV2SjZa7LRYUAy12WjZa7LRYUBy12WjZa9y0WFAMteZaPkrslFhQDLXmSmMteZaLCgGSm8Eu/w/OhhKbwSb/D86G9DSGLqan1NDKU3cTU+pqGWsVMdC2SuyUxkrslPmFC+SuyUzlrslHMKFsldkpnLXZaOYULZK7JTOSvfDo5hQrkrslNZa7w6OYUKZK7JTfh13h0cw4ifh1wt034dei3RzDiKhKItqdAJNMi3TOAUC4hOwZT8jP5VMslKylC2bfg+ATCWsoguRLt/E3SegOw7d6Ji8YFDa7NaHyM1SYvi+h6eWfQnrO41qpx/FCRcH8yk8piPlv9K855E3bOxRaWi8xfEgGYTtcj4XI/+2tZDiWRrhZRBM5hykaH7fapY3Gljd0HmIPSAsx+WtJeJmuTG7fca1pjyKMkRkg2iJSom3T5t1A2671M5eIkbdeeHTZt15kp8xULZK7w6ZyV2SjmFC2SvMtNZK7JRzHxFfDrvDpnw67w6fIVC3h15lprw688OjkFC2WvMlNeHXeHS5j4iuSuyUz4dd4dHMOIuEpvB29/h+dRCU1hE3+H51LmNII66n1NQyVVY3idwSVCjLmLSCYCgknl0p3DY9GUSwDZRM6CY1ie9ciyx9m7xP0M5a7LUWxKATnX4GfoKUxHElJCIrkn8QhQIg6liIpvKl5F8bfgdy17lpK/xQIY8Nz/AJSjD5hoouH4ijKC0odfKRqIneNNaPmj7D4n6GMte5KDcx9sRDZpWRAO/Qg7UEcRWBIOwnQ784pPNFeRrE34HMlcwgEnYUDEXybLXbZMJqQywSBGgB9fvSd/HF7ZEDMeQB205/PSo/kw9jeGa8En4qoGime5j7UuOLOdcqx8f60dMOhw4OQ+L4rSSJcr5okjcbUPDcOZ2EFrYDLMJuIbSToB5YnXcVzfzPu29Gi+lk1ZZLeSAcyie/pI+tEQAiQQR1FLY7AMisttBdDOW0ZEy7jc+g+de2sKwy6srAQArqVEySCDoT6gVovrI+0P+KxpbcmBuaN+wXILRAG8kD4jsIoWJVTbJFkXGVA0OHfxI0PltiBmk7yOVXmKx15VtW7drwgQAiDy5VAEacoEyI0jWrf1F9dErD4Zn7OJtFwpbfpv8J05Vc4Hh3iy6JcIk6CAF1/FcbT4Ca6x7OWrZa7+0BbrMHJ8Im3sPKAQDE+bMCDPyrJY7FXblw21Ju5SdZJWT/CugE6Gs5ZHLyUoJeDftwBiNUB9Lon/AIAVC77Pm3auRkzvsXhoESVI23EyDyFZDhjYm1bNy22W4LiZQLltFK7sGUnUa7k8x3jTcXW+2RM+ZrhGUggyCCYAUZY3JYnlyE1mqNHZRLbLE21ss7AagFm23IycqWuYIowYW8rCdCSdx0J6V7fxlxLN20GTKAHBV/efNDe6CHGQCJge9EkiM6cVeABzaHaQuoEjp1Bqk0tiqzT2cYIKNaliAQxYqFHM/bfqKPgcKbzZbUOexBAHUnkNaBwqygsJevecvJCICFgmBm6nSeQ5UT2YYYe7dt2ZteLkjxdYKk5VDGIksd+m9XHM1e7IeJP8B8dwt7JysJHJhsY59vQ0mygb6VZ8TtMbjPeYi2kAebVrmUNlAy95OmkjXUTm8Y7XMylQVzGIEmJ059OcfKtY59bM5Yt6GGxlvMqgzPMRA35n02rlxdsoXBkAkRz06Cq6zgXZxknVSAXUxAkGAOZ1Gneotw7wsqs2ZnbYaQsGSc3Xr2o+ZvoXxtdlvhrq3FDL8tJHrFEKVUcNJtZ4XNJ0AkkBfxHKDprvVvgXN0kDKsRGYkTM7aVayqti+NnZa7LUnQzAu2ZB1HnOnPUA6/ClDn8NpuA3D7uVSuXYfiEHrqaHmSD4mMZKL4A8Mud509Nif10NVz37ii2AjXCcocge7tJMCPyp/FNNvJpqDrtr023qZZlWio4qeyGSvMldi+Hm4CrXFWFLOFGY6CdBI5GY7igFFt2wLdw3DJ1ZSsDluf6UR+pjJ6E8Ul2GyV2WqduMNtAnkYP29KLh8eWDhriAwYMEfhMc9dfSq+ePsXxss8tHwhGuvT86qUuFgCpUiQDEk9zBjT40/gkD5iLtsQQPccmRvJV4+VDzRGsTfRnTeuliDaIXMwJnl1+Ir1A5uPIi3HlOnbbn1p8Yi35p3k/hn8q8W+uUQsnyz5B2nUiuCUY9pLr2dSb63+hCwLxIzWwF1nUSI+NES3eLDyrlzHmJy8jvvTrYpQT5NI00Qa61VM97xND5M3bbTTb1ocVekv2NN+Wxs2rs6ZMubSTrl6+tc1m6ScpthZESdY0nlvvQL1u+bhysAk6eaNIHL1rsVYvG4cjQpIjVhEDWQB1pcetLod97fYw+HulpVkCSIB3jny3mvWw10vIZAkjTWYgTy3mgYrC3WuEqxC6aSw2Gum29SxGCuNczB4WRpryA79ai0quuit777DJhnzBi65QScsaxyG1enCvluRcguwKyCcgBaRHoY06UE8NY3PENwgZpC5ZGkaTm7dKjisGAt1muZRciZGiidOevTlStaqukOnu7NDwrBXDaj9py6MpItkw0g+Jvvl8sd5p9uHsQB+1MNIJFs6nLlLb8yc/qKy+FwJS0QbjH926AZQARcZTmktpGUCOc8oo1uwTlR2KhVCg6GAEe2NJ6OaXxyvSX6J+SPVs0i8O1M4q4ddshGywRvzHm/U0N+FozKTibogrpoPczANqfxEmfWqe3w5FI/wDMEkMn/pRJtoUA978Qk9tta5+HW7hAF8yUtp/hn/04hve5lTpyprHK+l+h8o+y8xNhc4QEhZGZsyuTO+UK0R25Sd6PxHiDqFW2WEWpLFrZcKPNEoSViNQDyFHseyV5rhJdVQPqB7whUmNwZI68zUL/ALPXLbPlU5VsurEjMx8QFFYBDEDLJ56nStopxRk6ZHhvGnQOtxjeTzDKwZtVAJIJ/D5hVdwoZ7mc2xknMcpW2swYAzECNAOtSw9sLJ8RTpc0yOD57eTc6b60Xhns/iBFwIPDNsAalpDABjAk7Zt9pFF8uh1QslsvcPiApaDeXLkLbTGmnIiY5ij41mVT4ZuZXtJvcQMsl8ykKdocgg9D2ovB/Z/FEgXAEQgurSHnMNBAM8+lV/GOBvhwqhiTIAJVkBCRnjNoZJ5bUKLvyO1RUXrrC2xWZAIB8pAIkbjTvTPEsOng2bjJbzWrZznxUlzJIDyY1Yz8Y7Uhbwt3I6A6Nn00Alp135TTGMwNy5Zyu4AIMiOYbymR0WB8K04Mz5GhfjV2zYui5q4dLYeFzW/ECHQ8vKSAR37VRWGz9vMBM9QTOgnlyp3ity3cR1BcF7lp5KrANpMsaNrO/Kq3Duts75hmBE+UCN9jzH9qS7oPBacVxRuC351JS2Blm7MwP4+Zga/oD4Visi3A+SWZCJUsYUdSYHvDlzNKXR4rZtmhFCoDEKNNNzz586sMJw18hgOwjpERH9PvSlCSQ1KLZZYW9h1UICZGcBysxnYtqBvGYjbkKqeI2PEZm8W2+VQEARlLCToTsD5iZ5/cb22UkMIM1NVrgf1E4eDp+NSG+E2iVdFkMFWcsAZAW0MkZs3MGp4ngT3LbZALTAq1rKRPmOonkAOs0k3EXw+ZkVCWGU5p2+BFbLC/4aTvkX7Cpf1eRJPRa+nizGNwHFLoiKwAIDM4k9DAgCamOE4pZZ7VojKARm0GUGSADuefU1torxlBEHnS/mZPwH8aH5PnVhCzlnZUWIyk6AiAMsmTOuu3eri/xmyzqpLGJzSGERJIPbtrVqfZnCf/AME/+X5GqXi3CbVu6QisD4dy4PNoCrW0iCJ18SZncV0L6lT0iFgaf9lmcXhyDJfN5g3kPYPpl6LB9B0oV18ITAkoEUKDaMiCcwOmoj86oXcjFlZ8rLiDG+oDRrvzO9V/CMa7YprbEZf3gAiCMoYbjtVVJL+i+GO6vzX9mvu2+HiCEA1Ek2Y+uXqakuEwDH3rW/4lQcx1XpWR4ZijcuXrekjKoABE/vFGvWm8RhwNxGm4OgEGNvnr0quMrYnig1pmjHB7BdFHhFSs6BI2NO4TgSAHLkGpnbeT0NYo2VO3OTPT3TtGujH59qPhrJE+YRpyPx2PWhN30J4XVpmbxmJYt7xGr7E8maue7+8knfftK9KFj0IugcvEcfN3/rQ0tZnckGMq+knKN/jW6gmc3yMmXGQf5tPl/ar7D3LhQQRBDAbzAZh13/tVVw/DoUIuAhssrvvLbx8KcwvF8OtkI5uZ5bNCiB5iRBJ51ajTsicuSoMMVcnVx7o2B1hhB3rw3bgXV945RtPfsPlQ7GLw7zla7IWACFj5jvFGS5bbQ54g+7BPPr605ZIxdFQwSlFtC3Frl/xP3ecrlHuidZaZj4VHHrfa55BcA0MeZfmOhP2q6XF2gGGW75ucQfo1dYvIxIC3TAGhiOg29a558b5aNFjyRjTTKW/hrzXc4kJmUgM4UQAJABPY15fwjsbuaAtzJswYgKRJgelXiqIz27eZYYEyuUE7g/IfLvUbbDY5VXyqBIUgnWNu4Ecql6polyfQC7Zndm/w9gxA2qN20uUAliMqcyTv66n405ZwZuYlLRLKGBExuApOjEbnrBqV7h9vSbw2G6EEQTAMAiuqWWEdMxjCUtoWzplOa3dVW0JyH8JB1IbsPlVVb41dtsRbuZRmMfu0J36sCZFaG/m8S0QWyjPMExrESJg86x/ETF27/wC4/wDyNYxnyNpQ40zSWfa7HiYvkwJ1RD0/l70RfbjHCZZGkCZtjXfmPX6mre1xixYtLbyqufLnm0pzFxprzGh9IqtwuFw5ueIVORcpy7hvMdIJ206io5D4iw9rbsAmxhmEkHyOOQ6PVrhv/Ea8ihPAtZQIADONPiTV5isbh7tnVLTqCUKsq2yhE6CD1EeWTvtFY25wRS37t/LOn4j2Ag6/9qfJBRe2/wDxOuBROGWBG1w9NN1pPjPtyMTkz2GGXNAW4B72Xnl/l6c6YteydpbMPcueKwB9yVWJ8sbkaxNZjHcMe2PNETHfYmmprwxOP4O/6zrmt2iI1810sPoooze09xtDZsAf5GP3agYPCrlktII10+mlAxGECNAmCAQToe9XKX5Jil6CHjV3UKLSzyFpDP8AuBoOJxN6fM3IahEUbfyiKbwFoATCA5sok6sd4A9PtTi3LbTbL6wNANPNMctduvSjloK2Z3xLh/G5M8ie3SmGwzeJbZ8xGZfM0npOp+NTwzgPMmM24GsEUxdxq3EEBp0Pm5asOXPy/Kk3aGlTNKMJzzCDsZA/5EU1g1t22DMQ3aVjXTkT9qzC8YULZ8mlyRvEQwXT5/Sj4bGubjLct5EzDw2IIz5WysQTodRy2rgeF11/p0RmvZsXvW9jaHxe0P8AkfyotvFjYKewW5bJ9IBrO4/ijXkvqqKxtXLZTzEBlKEmd5jI0ARyHKrfhXFFY2bYUjNZVwc0wQQI2g7HXSpniUYXRSm3KrDPxq2pIZriwYM5dxy3pbGYu87A2BdNuP5dSCZ5z0qs4laV7jhhPnY7xsx6etdxnGNbwRdDDLcPXkhPIg8+tYqCbSXbLc6Tb8Gq/aOqnfWQ+g11215aVVcawzXJa20QkZBMvJJgD4D6U9xO61vBPcB8y2s25GoUHcGfrNK+zuJuXcNautmJZjPmzQOssCfrRCLrkvDobyJSS/so3xVvKS2Fvi6M8PktmA5Mic086Cb+EU50s3UuSfMbY3Pve656nlVv/wBcP7Z+z5fLIEy2aSheY2jlEUvhfaFmvLbuKAtxmUR+GAxBJnnl+tdqyZGuvH+EN47/AL/0r8NfwSXA9vPbdyudnS5l95WO7EAaHpyq+vICmwIKe8NR/h3uYpQcXW47W8gG0E5WDLnRWnTo3ymg3MDctMThiQNc1l/dO4JWdpBPzrWGV2+SoUlGlxZ7j8IouWlAEXHuj1HiAaH4Gj8J4bbJuh9luMq+aDAZt/mKr7vG7T3bPiK1lkdi8gxLOG0gaRB1I6VqOD6+KyMjq1zMGkpMqsmF03nkNZrog92Z5LpL8Hza4+W5c8gJ8RtdBz9J70jexjBcvljqQSdD61HiuKyXHAEy5+9IYi8S8coohKVI5pJB3xhJk3DO2mZfhoKZwa2PDa5cV3VTBywIJ231+lUlO2H/AHVxepH5VUm/BMUi+scawduMmFE9WAY//I03iMdbYCDbs9VWyWPaWIGvpWMZvd7CtJ7TIqAZDALuIE7QpH3rGb+5L2ax/wDLfoYTD4Vz57l263LMGUD0Cx96LabDIrC34qTBJUMZiY94/wAxrO8Cc/tFqSSJPfdWpe5bdmaA0F2A31g7D0FHFt0O6VmywuJtraFtAYa6WXN1Eyon4nX61fpca8hHhWjsMwZTB0jfnWO4awSwmcah2GvxOk/GrNMcQ1rJmKi4jOqcwpB2HxqYyblxaFOOrNi9sqtoEahkHI/hK+h3rIe0GL8A5gAxOUCTpOWZPy2repilYAlZ5iQDHfsazfHvZ23iCJuNbAiAACdARufXpSyY5SyJ1oqM0oNeSqBvqQM9t5kjNbjpuUg86zvFf8R8yJmzGYzRM66ljWxRNcuaYOuuvaYrN48IL9w3ELrm1XMUmQOYpRdMGrLni2AU27ANxAQtpmlgYyrcJAyZv441jaaewNlcq3SR4bK8bxCoxzbRE6fCue7Yco92w4ORMvmLAKFULo0A6DeNalxTG24t+BcnLJyuLkawNgAsxI0I5VbgxOd6KDG4Y/s+KgHS62XeRFydPUM3y7VbYW3k02bMTI7nqPv3qS8SbLAVROpyqFk8zJmdzS1jHtcusjCIXNO5MnsBSnddDi1ZW8Wxd62kC4xUOmUbgZrYc6HvOtMcTRxZ/eMWYXWkkzzcbmpcSxloQLlpWjWQXGYqMgBGfeD251HiN0vhwzAKWYMRvGYsdzrzqbuipV4KyzjbgNtVYAeHcMQNx4nX/IKBeuHOrMZJt2z6ytHwz2hHiWyWVTlIZ9Qc2kBgNcxpfEqG1C5QAAFE6ATuSZrS09E00gmHug+EemJQ/DKJ+1Qw10Jck7ZV6ciQd6Pw7Chkk6wx5dO/XWtBhnwiAA4UyPxh5Y/7lj5VstLRg27KnHcDuWbNm7D+ecy5D5CNhPMxuNIpj2f4bbexeLEkqgVZDgIS2YElQdSTlAOm87irPiHFLLC34a3LZVYI8JDm7lvE+Exypa5xglcq2gAYzZndpjsmRfnNZ7NLRZ4L2WS2B4iW2yg5Rmc5CSJPmaD1iKtT+zGUPhuWYeWA8kbaEnXvVO/GLRBzZ3Ugg5iLawQVPMk6HqKqk4hatfvAZZdRuxEagcl+lDBGqwX7JdzJbQASCRGXMTIHfTX596eTB2VdWCKrhcqkEhgN4Gu1Z2y93w0NtM2aCpyAFYnWYgTzPPSrBsA7oniPrCyJHlOkjT9aVkpKa6KacX2Sx9vB27he5la5rP7x2PUyikj5ijYDiSXCyW7QVAJnKFUnTQAb6d6rzwBD+FZ9W6dj2+tStcES2V8wU+95WuQeQBGbpy23p/GtaByfsu3IdCpAYHQggEHsZ0oboUt5bSou8AABQTzgR0Gg+lLqDrDxtzb+tRuORu4iQNWaCTtzp8IVXEOTu7Kq57Pzif2lrjgjXIFEaLl1g61UYDgh/aEuNdZlV3JUowHp738w1HSrzE37viZVaUkBoBO4EwZ+9I4+y1t7DiVKMwMbkEr002EfAUSqFV01QblfuwHCuA3LN5rjOhQlsqydJuI+5HRYrRoAZ00nbpqTIjvrFFcFt9+R6UDUT12/R3/XpUZsbf3R7LhNLTEMfaRnVLihgCPMRqQUu6GOcrPxFL2/Z/KWNm6yKeWYjUT03p29cDusSPNG0fguTuINB4hg2eMrlCC05TAM5Y3PLX51hHIk9ujb7ukfN+I2y164GIGvTrB+1Li2Q0xmg8xIPwp7EuLjuZA83LtA/KrPgnD1e5kcn3c2WYLCQN+QnTr9Y9OMaWzz29lLh8A7AlVLQR5RJYzpIj1q34f7LXm8zqgX+F2PoCcmo67itfZspbELbVPgCT6n+9KYvjdu3dS0xjMpLNpC6GAdOcEf96TBFbhvY1FUFzncHqcn+0Qd+9OLwC00Z7j6dcsTEE6zy60TAcXtMk3GgyeseoG/xirhFkDKNCJ6H60UNlAnstbW6twNIG+pnpoVgVZYfgVhQcqETM6tzInWecDarLDQ1w2yDooObNszTlEcxoZM6SKmic5ooRXpwq0NPDVtZ8xL69fMadw2Gtp/hoiE75QBPbSihT2qYMfhE9YmmkkUQU68p7f2oV7iKI2V216eY/cU1kk7CepihrhSq5TLrnJJPn0JkrBEwNh071lklJPSKhFNbZmLykXmuW3bKxSVCiTAaRB9d6BdwbnElrlp2tzLGDGiSBIO8wIq8wJy3LmYhVk5BpI1MbbafGrL9qRTq+eTuhYGOuYDb+WsFuVtM1bpUqPbvFjcfC2Vt5AVXOhVW0CEhVGunliNDSvtVhLaGy1u34ZZWzCI1GTlsIk9KjiUyYrDXbbgI1wgE7L5ihn/AHGmfa55Wy5ObzXB5QddtfTSulSMGjC4viht3LYAGV2jf+YCfrT2FX/zUDdkygQSSYZgNP8ALWex4D3EhlUo2qnQ+8Jj5Vq+CW82NtPm1DDTbYNoTrvmqZRtMadNDFrhq3ZDiYdgFmGzAmdJkkT9a7inBX/ZiwgBXCmZBEGBpFWuO9mbtzxP8Izdu3ACWOjsTHu76dKZx+GNvBMrgqVe2CJMGBbGnUTzqFBKjRvzZgLeGEtmiASJPlXTfU6UC5lVypnTeNdN/jTN3APcYwAAGfVpG5BEaa17f4axdnZ1C6SBJMZYPpsetVwJ5V5Ii7ks3GXeZE/zIrbT368qd9i+PvnS1ebxLTvlAbXIWjLBPIsYI21mq3E5fCcA6GNzt5Qo+gFJcHsuHtlVYgXEJfKVUQRJzHTTferk0u2Qtm29s8Otq4nhoqyje6AJMjePWs5gVIBDNm6mtH7evmNvLzRvuu1ZjC22XVtARzMn5VaktEtMTWyx0gue3mOnPXWnMPYe6WVULAKSwzKAFGhOpA516MbbTygzO+tX+JdFwZZVS1ntAmMzE5vdzmSecwBtG9Yzd3S/4axXtjmC9pzatrbyC4VECFCAAbCRB2jWK0PCuMWrtpblxTbYk6KSVHmIH4ido5c6+TXL9xbakMAhJVSB5jHMyZHwrT8Dx9w27dpWIzgqrQG8zEgdDM85NEINMUpo+g5LZAKXJkgE8hMwWzLtpSN/hgJLC8QCd5XLJ6cvgK7hfFLhsgW7iAwxICCdCZOUNJ0E7VQrxK2wBup5wWgjVmJ3OXZTr8Naa7HWi3fh1wEZbivPVf6gUK9hypyXPCkjyiYLGQRGpHxG1UL8TbNlt5gx2CjPc+gAHyHrRcBgrudbjtkIYGD52Ma+YnT71TdCo8xfA75vNdt5srqJUXGABWBpliZHM9qm3CyUTxkd1V2JXMzEeWBzkjXblHSr18dc/FkYa8oqKYuORHYHTtU1Er7iGHdGWUMj1muvLI70HFWxcEqCrghywVZOUg6ncj1r27jVQE3AsfhiZbrCz+UelaE0xUIwLB430joRpM89frvRLbn19dD9BRLOKF0FoygGAJkjKAB8a8tpE/0J+1Y5Pp4ZN9MuOWUT5WbUOcu+Y6fGmPBzEF9SNp5enzqeJcKHYAHUn+08tZqTkBQZgErqD1IrrRzhFtTv9daNbsgaxULglTGsg/GjI8genzqhDGBw3iXETlMnloNT9q2imqD2bse9cMfwjT4k/ar/ADeprObGiOHQi5cP8WSO2UEV6MRbXMGZVIYnXy+8c3MzziecVVcYwN66ytYR7qwQ4RsoBHJvMJ0O2u9J4qLbKHBVslqQBOuWCJkR7u9ZKa7Lo0H/AFC11Lf5QfuYH1oT8VH4U0/nIB+Qn71RvihyQ/6m/wDwB96G2KfkFX0UT/uaT9aumybRdDiDt7kR/Kpb66ilruL1lrgB6lwPokn6Vn8VxDMCrXcxPVp2PrApT9sXZVYnvA/v9Kld0xt6tGiTGpzJJ/lUx/ueD9KHcxwzMFScrMJZjrBjZIrO3sZdAnKF+En6/wBKFeuGC9x2jtpJJ6CATrzptbEpF9juIeIFFxkCrsogAc5jrOs0XhPGLfiw1xQgtxDllE5gARIy9dz+IVkcPjVZsuTLOxn8oqw4PHjgfxW3HrqD+VROCcSozaZveJ8HwtxA+UMTABTSZ7jSO50oeC4PZwzi4UusymQVaT00TY/GOVZThGJFzO1vPZZWAORoBzTBOkE6HcGtNguPWgoXEF7jISrXVVXVSY8pyCVIH8vPtXNK1paNo09s2dt3963cRgRPfWdIE9aU45d8TDumUZyVjYxDAmddBE71XYa3ZvAtZuq/+VgY9QdQNdpEBRuTVJx3G37ItqrZM2ckxqIjbNMaGnHLToHC0BPBr5Ms9q0n8bNmHzXT4TQbuDwaMFuYu5dk6+EoA1OxmfvVNisRzuOznlmJPyB/KkL/ABJQPKp0gxMajbX+1bPk12ZriXfFbVmxdZLYAAywSJcyJ3f15RSl/iFtQSJZo3Yk/DXal/aC/aNycrlyiEwQBqJzEsWLb7eXbfXRUINWBDKVYAnrzBB2YTt3BEgglKCSV/spy3otOJcbW5Zsyt0MqlRKqA0ZRObOenSqW7j3c+8BHTlVjwmwtw4a2zlDnugEKG80qVBkjrvVLirQt3HUNmALCYyzG+kmBMxrtVwREmRTUyfU96YfFE6M7R6kjsI2/QpvB8CuskkLbQ/juHKCP5RBZvgDVlh+D2E1YNfYc3/d2h/oBk/FoPStGSkygs2L185bSlwnQCFnfMxgAdyQK1fAcM1hrbXHDOjBsiGRIMjM+3wAPrRkL3PIi5lGgVAEtLprt5R6c6sLHB5A8R9P4EkL8Tu1Q2kWoti3CvGRvEFu4fMoQhTBUzmOaIEGD6jSk+HtbchbztaaY8OCGmTu8fTStfYfKuRICxERGm2lLWcJatmURVPUDU+p3qdFqLJYbD27YhFCjtz9eZoj4hFZVJhmkDfkJPpXkDpXjWAy5/4GEHWRmDTt6R8aVD6Clv1yoc14sjfT7/2od1wAWJhRudh8/wBHpRQ7CZzkuKs52tuqwDuRpWT4haxUnNbuDq/vu3ZcpMfr0rTEXSuZfKOQcQT3IPuj1M0jf4iwViVU+UwQTykTzB1qeco9oTSfTEvZhnFtlFplGYElyV1gaaiSfQRWkw7b/CsnwLiTm6EZjDZjEEksQInsIrWWRv8ACtou0Yvs+UYkHw3U/wARjv5tKM6ZrWTnlUfKKOyat6n70ddq2ozs620KJ1MAaAnlv2pz2Usi5JuLmGp1BiS08tNjtSLOQyxsZBEdtDP63qx9n7am4yOocMCYbWCOgO80pDReYnH27aEWTbLyIRQDJJEwq84mo8Gd75L3bmW2pMrORjppACxH139a5L+FsnLb8PNsQil37iVG/LU0jxRXvoBatXF82Ys+VAdCPdmZ137Vm02NOjYt7R4W0IDgdMoEg9wu9YDE4kMbjh2eDMxGwJ0nXWZ1qeC9n7mUNeLW5J0gMRrpqpI10NXuG9nLIWGLvOplyoae6R6R9alwVUmFtu6MeOIu27ZRHQCPjFI3eIoTBzMOu/8AyP5VscZ7ErdkYe6U1hluyQus+VlEmOh179cNj+FvZuPbYhmQwxSSOs6gEfEVSAdRBmMHQoY+QpDF32hUXQZdeUyTvXlvEMICxtFe2sOznUnvoT9qBIhhbsBlY6GOp1omLxWdcoHMGvfBtg+a5/t8x+SyJ7E0wwwwtkxeD8iSFj/SAZ/3Um6GlZW+G6gPBAnRtvlRsBimS4jByDqJk6SIqC2s2rFiTzbf70ezZUEAChsTLzhithxLxdS5kgqy6FZ0nf8AFsQKa9mhmW80EB7rHUdRsKz9lTJyk6frarDB8RcaBhbI08gC5u7AaE9zWbipC5uO+yScXtXL4S5bFuWyrcRiHUzCyR3jUER3pv2hxN+2qDx7jKc3vZcw0XTOBmI9TyqpfhVxQjOFI01O2n86GD6E1Z+0+Jtultlb8TaEEMJA5fDrQ4XJaNFkVVZmcRfg/wAR3JPeikyu3KlXEkxUXfSJ+E1qSWXFZm2xB1tWt+flAP2oKYoKTAlWiVOxjr3GsEUu97MEmTCx8i0D7VEox5RR4A2PsxbtNcw7LdfMt9PIwEAsygLM6zB1A+A2q2XgyI7PZuWjcLEzclLgJY+6bgyjWdVI2rH+ziIl+09y6LeR1dSVZgWQggGNvWt2LeZswAceU6MW/FnBiZHvaT1Hxjou7E7nDMVm81tj1doyHocyzmpvD8GWJuMXMzEZUH+kb/rSn8LjAhAgpoBoSv4uevSN+/xcTHBhLZGgCcywfdLRmWPr370FoCi5V8oAAGgiI9ByqTSd4phkQmcrLrHlhgeWoMEUM2AdVZT6kqdp2b1FTTK5IQxbuuQoPLnGfQkZYMzA0/rFMx3o72Mlu41wFQuQydve1g/0qsPEVgeGM7HaQVVfUHVj20HrTpi5IbZgBmchR1P5aST2FIX+KMsKgCqxGrkLJEhSTsqjN3qsx/FFU6t4t07Ae6vaF5dhWb4pfuA5rr/vI8qjZZ2mNPhVUkJybN2iXMpe4bZGnmtmV1j8XrpXC8lublwZgPdk6L1yrBlj/EZPevnHB+HYjEXCtjMSNWYGAoPU942q4v6Dw9PLuQxYHbX1mdKUmoijclfg2AsteUPcGS0RK2wfM43BcjYdhSeJxhuk2bSrEEM+UZUB00gfT/uEMNirmIAtBgqqoDQZ0GgieZjbYfQ3+GsJbTKoj8z1J5mq42TyEeH8HSz5lJZjoXaJ9AOQ/U1ZWbkSDrt2rnYj9fr9fSGHG/w/OqSEYByZI7nUetSXQzFQc+Y+p+9aDg/s096z+0FwtrMFHNm86oTHIKTOup1gVqZlKD2qdq8Udbi7g1rMBwPCFXzm9plykMsQeZ8k89o3+de8b9i8lpr2GvG4iqWZXGVgoEkhoAbTlA+O1OX26ZMZKXTCWcoUHQZhJ5AzrPWvTaO+aR2EH0/XSqvgN+beUj3THXuKtpIPry6jvFZtFntpABBJIrxrZtibYDIZlNPiQeR/UV47KOsSAfU+lEFwKNBHX/t/frSoLPMPiAZzNqI57dMxGqmfxjT02pu6i3P8UEwNXA/eoBzaB51/mE+nOlRhhdGZCVK9DBPY9dP1ypbD4hlIRpBBJRQdh1Rvw/5Tp6VLXopMFjvY/OjXLRtzydQDmHXK4y/n3rAcS4dctmLhZhOmpKz0jke2lfVsHjCuVlYKHIjRsjnUQ6jVW095dKdv2bOLDK6ZXXRxAJE7ajRh+tKmwcfR8UtkDYAVLetd7ReyBtHyEazAneOnT0NZJkKmDSskiooiAgjSe3WiWbOZWYbKRPWTtRcNGV35rER33+lDFZALl8xEBuvWu8OS3rIppby3ALUHNPl6T0mjHgt1dkJkbZk07b1DXoEVuHxly2fI5HbkaDxG+WUCNc3L0NPDg955a2siSD5lBkb7mpJwq7dD5FH7sMWJIHuiTz1NWmFK0ygyMd69XD9atbPCbzqGVMwJI95Rtz1Pr8q8wnCr10wiT5oPmUQdNNT3qyrYiUiPSpohOvLryp/H8IvWpzpAWAWDKRvHWdfSo8PsPcJ8PSN5OnxHP5Gpb0JHYC3lu2p1lv1pWpuWUuEMwZXCgB0Yq0AQNDKn5VFeDFMl24maSFUjKoB32Db6jlHcU3gsKzsFUSfWByrTE007Jk90gFnFXFYhW8RFMBbgk/OftTKY9D/iWrls9bYzCOegMx/XamsPwpVJ84fMTEAqukTqddNeQ+NSu4FYLKxEa7chE/qK55c+WujpXGtksPeza27tu5rPvZWmZ1BjUmep1PrRHxjoVFxWG3vLv/h6g/6Cf9Q2ikLFtLobKmYLALGBJ1251MC7b9y4wH8JOZT6g/1p8qWxV6Hb90PhroUS37ryg/zJO8c517elZrGW8S6OyhLdtNHIcEkQCTpuO2m/OrlLxbytbQa+8mh76CB2qpe4Qt5RILKpUg7Sn9qqMk+hOJQPfyKPC9580v8AijTQdN+Xai4jhN+4mdLbMp21WTtqATJFN8H4YGteIQCFbnrl2jyzDD1GlbXBmUUtBOUTpHxjWrpEKzE+zNu5bTEZ0dDCQGUqZhwCJ+9T4bw97snVbfNuZ7L19dq1uOw6XlynaQeY29CDzqVq2FVV6DU9TzO/0pcbdsq0o0hXBWLdpQtuQPqT1J506G5nfl2/v+t9uuKBBA1jfmJ/X65R0qyD0danbMTzPPWI+lBcxqNDyHTXf6V2Hff4U6A//9k=',
        description:'Uncle Fixer can expertly manage house and office maintenance and repair, as well as other handyman services in Rawalpindi. Go hire your Fixer'

    }, {
        id: '5',
        name:'Faisalabad',
        img: Fasilabad,
        description:'Are you in need of the best handyman service provider in Faisalabad?  You no longer need to go out and look for house repair services; simply go to Uncle Fixer web or app choose the most trusted and finest Fixer in Faisalabad.'

    },  {
        id: '8',
        name:'Islamabad',
        img: Islamabad,
        description:'Uncle Fixer provides handyman services for homes and workplaces in Islamabad. We have a staff of Fixers who know exactly what they are supposed to perform.'

    },
]

const Carousel = () =>{
    const [service, setSetvices] = useState([]);

    const Services = () => {
        axios.get("https://unclefixer.co.uk/api/services").then((response) => {
            console.log("response",response.data)
            setSetvices(response.data)
        })
    }
    useEffect(()=>{
        Services()
    },[])
    const settings = {
        dots: true,
        autoplay: true,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        speed: 1000,

        responsive: [
            {
                breakpoint: 1924,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1224,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 3
                }
            },
            {
                breakpoint: 680,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return(
        <div className={"Carousel-bestServices"}>
            <Slider {...settings}>

                {AboutCities.slice(0, 8).map((data)=>{
                    return(<> <div className={'citiesAbout'}>
<div className={'AboutImageCarousel'}>
    <img className={"imgcity"} src={data.img} alt={'/'}/>
    <div className={'TExtCarouselAbout'}>
        <h1>{data.name}</h1>
        <p>
            {data.description}
        </p>
    </div>
</div>

                                </div>

                        </>
                    ) })}
            </Slider>
            </div>
    );
}
export default Carousel;
