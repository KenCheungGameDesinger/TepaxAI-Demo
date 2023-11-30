import React from "react";
import Head from "next/head";
import Advertising from "./_components/Advertising";
import TravelPlanCard from "./_components/TravelPlanCard";

// import TravelPlanCard from "../MyComponent/TravelPlan/TravelPlanCard";
import TravelPlanDetails from "../MyComponent/TravelPlan/TravelPlanDetails";

type Props = {};

const plan = {
  TravelPlan: {
    Title: "玩轉香港日與夜",
    Favorited: true,
    Description:
      "kdsjfdadsfsfkdfkdsfsffdfdsfdjfdskfffdadsfsfkdfkdsfsffdfdsfdjfdskfffdadsfsfkdfkdsfsffdfdsfdjfdskffsdklfsfkdsfkdsfdfkdsfkdsfdfkdsfkdsfdfsdffdfdsfdfdfsfsffs",
    Destination: "香港",
    TotalDays: 3,
    TotalNights: 2,
    CoverImage:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEBUQERIWFhUVFRYVFhYVFRUWFhUVFxUYFxUVFRUYHSggGBolHRYVITEhJikrLi4vFx8zODMtNygtLisBCgoKDg0OGhAQGy0lHSUtLS0tLS8tLS0tLS0tLS4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAJ8BPgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAQIEBQYHAAj/xABJEAACAQIDAwkFBAcFBgcAAAABAhEAAwQSIQUxQQYTIlFhcYGRoTJSscHRBxRCkiNDU2JygvAzY3Oi4RUWg7LC8RckRFRks9L/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QANREAAQMCBAMHBAECBwAAAAAAAQACEQMhBBIxUUGR8BNhcaGxwdEFIoHhMsLxFBUzQlJicv/aAAwDAQACEQMRAD8Az6rRFWlVaMqV0Fw4SKlEVaeq0RUoThIqUVUpyrRFWhSTVWiKtPVaeqUJpqrT1WnqtEC0JhDC04LRQtRNsMRZMEgkqJGh1YT6TUXOyglTYzMQN1Kt2idwo33Vuqewa1mB9oSWHaxfDkpoHG4iJAYATPnTn+021+D/AOt2PmSorI6u/h6Lc3DM4+sK8um+pAGDvvPFebAHfnZaFct7RJ/RbPhY33btkNOvBbsRu1nr0rNXPtUPA3P5bdkDwzSaA32pXP7781sfBagatQ79flWCjTGy2GKwW0YXm8EpMdPNftoJ09nK7SN++KL932jzUnALzsjQX7RTLprmNwNMTwrDf+J18+yL0/4vrAWiD7ULy+0Lw/4qn4rSzVO/n+08lPYcls8OuO153Z7rG427lt569M8/GrPCYNriljbu24MRctkHw3adtYKz9rLjeb48LD/FascP9r+6S06e3ZU8df7NhR2tTvQaNM7LVtg2HUfH60NrZG8R31Aw/wBrGFYxdVT/ACXVPkyH41b4TlLhsfZunCqy80UzEqAGlwpA7Nd+m6pjEkfyHsqnYUH+J90ALTstOAp0VsKyIeWvZaLlr2WiUQg5aXLRYpIpJoeWkK0SKTLSQhFaaVoxWmlaEIOWmFaPlppWhCAVphWjlaaVoTUcrTCtSStDK1GUQo5WmEVIZaYVpJqgRaOq15VoyLVyyJqrRVWnKtFVaaaRVoirSqtFVaScJqrRFWnKtEC0KSaFp4FKFp4WhNMC1U8p7/N2kOUmbqCBv10n1q8y1Xbb/Vj+M+S/61XVMNPXEK2iJeOuC41yhfNirx/fI8gB8qrakbQfNduN1u5/zGn4fAXH3CB1toPqazNBNgtrnAXKiUtXFrYw/E5/lEepqYNkWvdPfmPyq8Yd5Wc4qmO9Z1HI1BinXLhbeZgQO7f8zVz/ALBBOlwqP3lmPIipFvk4qjM7ZuwdHzG+l2D5iE/8VTiQVmxSVon2RaO4Edx+s1EvbFP4GB7GEeopnD1BwSbiqZ4wqmuj/ZRtJbVvFB5hkRQAJ6bXUVPDMRXPr+HdPaUjt4eY0re/YrejHsnv27g80gVlqg5SFqpkSCF05Vp4WnotOy1tBkSsJbBhCy17LRctey0IhCy0hWjZa9loShAK0mWj5aTLQnCBlppWjlaQrSQgFaaVqQVppWhNAK0wrUgrTCtJCjlaYVqSVoZWkhRytDK1IK0wrSTVEi0dVpqijKtXSskJVWnqtKq0VVolSheVaIq0qrT1WiU4XlWnqtKq0QCiU4TQtPC0oWihaRThMC1U8o0IVGG6WU/zKY9RV2FqDyitzhbgBAaBkzTGcEFQY4EiPGq6n8CraVniN1xDZlkc64YSRMT15oNXAWmY3ZzWMc6sNHTnFMaFXI3dzB171NHAq7DEGmCFTjAW1SDwXglPQRSVecmtjPiLikIHRT01NwW9OwkjrHmKtqVG02lztAqaVJ1V4Y3U9SqkHSJAns+HVSlCQAW0G6d1WfKfZi4e+EUMoZA+V2DMkswykgD3QfGoezbatdUNunqncJ3SKO1b2faDSJQKLhV7ExMxrafFObY10WxdIAU7iTr2acfCoxwL9U91bTllaWy+HtbwbWYNqBlLnIB3QdYEzVLktmRJmAYIg9oEHs9aro1nPph54/K1VcNRbULGnT48FQnCOdCsjzqZ9llrLtFnXTIrmO6Yq3eyOvXdPX2GRr3177L8E2e7eEDNdFrX3QGe4B26AVnxbi5oC0YWkKZJBXRbaQADvgdQ9BT8tEK0mWmqkyK9FPikinKITIr2WnxXoolCHlpMtFy0mWlKEIrSFaLlpCtJCAVppWpBFMK0IQStMK0crTStCcKOVppWjlaYVoRCjstDK1JIphFJEKiVaKi0xBR0FWrPCVVoqrXlFPUUJwlVaKopFFPUUJwnAU4ClUU4ChNIBRVWvAURVpSnCRVpb2HDoVPEeR4HzoqrRkWokzqpAEXXK/tFs5cRgr6gKl3C83AAChkdmKgcNXFUQrZ8usNzuz7ygTcwOJ50dfMu3S8OkD/LWZ5O2iXS9iUVbJE21JJa629RABOWJO7WBwM1VhcQylSIcdCQrcXhalasDTGoBUYVrvs9Qu2IQg5FtZuwtrHkyIfKrjamIwWMwjYfmls3wkWbgGR84EjXKsgxuk793EB+zDAXMLh75xoNshWdy7BsqHLBkE6dE1DE4tlaiWgbcQfRW4PA1KFcOJ0B4Ed3usT9oe2cm08QmSchtr7XVZQbo65qiw3KLKwYWzIjQHf2buNW21eT13HYrE4hLqE3Lly6inNqpdgqTGjBQN+nbVZguS17nLbSuXMrfi3BhOkdh30MxX2ZMwsIj8K3/LnPqFwYZmfOZ14Lp3L3Z7fdcJihqq2xafrGpZD3GGHl11jmxOaAAc0iI3z2RW35UbTF7BtgrIZ7jYe2qhTli6r5wZPHox4msthbd6zzVsjmbgtKWLopuNcMzBYERofSoUMcKdIAtJvHdvfoqNf6a6rXJDgARJ4nbRE2rYxOHw5v3bDqgX24BUHhmg9HXgYrVfZ3s02sFhwd7K95uvM0b/BzQ8DyyuFDgsdbR0vI6LcUQHlWBV0MjxHUdKtrGIt2brM7BbdvD2EHUSzXGgDicqpuobiTWcJAEXTqYY0ARczYdBWO0GK2mYGMozdsDUxPGAaOVGVWVsysMynrB13cN9Z1btzHvEFMOp167kcCfkPWtGlsAADcBA7hUw7O8OH8R59bqDm5KeRw+6Z8OtkkV6KdFeirpWeEOK9FFikiiU4TMtIVosUkUpRCCVpCtFivEUSiEAikIoxFMIolEIRWmEUYimEUpRCEVppWikUMiknCEy0IijsKGRQhUKUVaEtGSrZWeERaKtNUUVRRKmAnKK9cvKglmCjdLEAT1a04CqblgD91Ljej22BHDpBf+qlOyYF1eWrit7JB7iDR1FYjEOzEaoOih0s2D7dtXmWQk+15RRbWJurGVhp/GvpadF81NRDiRMeagajA4tny/utotFWsxgts3QQrKWkwIi5PV7Kow8Fc1pQSGCOMrncpIJbSeiN/mAeyl2gFjbx6hWtbmEtuO7qeakLRrYoKmjYayLjFGMIBmumYhNejPCYPgDTJgSUwJNlgdrYhXxeKt2yYuLbLbwGBQJHas2ifGskb6XLq4aXtPaQ2rTEjgNASDIEIBJ30fbt9rGJW+SApuNZUfiYLBlo10DgQdxfsqPbtLdYlrZZ+iVYMV3tqGI4GqOwFTM6RwjxNuXkbLW3EmkGsgzDp/wDIvz47iDuJvv8Adtvuf3i7euSLZVSz6feM5FsKszJlRrrpPcRMSzi/aNwNzlrmyVJgiOkNQOMU/GYBlwi4mees5XXm87GHe2xUqGkCIJkCRIMGIqit4R0c3bKtkTIbgYgMFuaCBPS69B5SKrfgy1pJcJGnVu5X0vqIqloDTBkXgRrfUzMb7q45P7aNkPaw6DnVtyl5wDa53KCy66hgZGu+Duqi2pnGNw7MEDN03NtAkkn9IGygSMyk9Uu0b6tLezxbuHKx1Ia6kTlY65l7QOHGOFXmL5I3ExIxwYXbfNwy6DKgBHRHVBniawnFUmVMjjH4nuvqthplzA7U9/O3is/jMY1u/wA4h6WkcYKwQSPH0qws7TtXL6OiW7eqs63YFvnB7USYyjTdHdMzBxNhefyNlyq2rgHNDRvPGBu066v+SuDQqbbqrqGJY78zfgUmN3HKPHqNpbAynVb20Q+mHDx5qm2ptLDu2HsKkG1LO1rVOcJ89euI1JrUbG2eMU/OXuiAq5bYYiUtqtsNEzGgk1A5T4JLbNirmiKgJyj8SgyviI1rIbE5T3RiFxBbU6qOCqNDbjqXUdqmeupUqeY6W49/GPDiseMaKUQ65Bju4fqfZdrtoFAVQABoAOFLUXZ+PS/bW6m5t4mSrcVPd6gg8ahbU5QW7Tc2oNy7uyJwPUx1juEmNYiugCItouCQZurehX8QiCXdVHWzBR61lb1zGX82e5zSj9XbkGO1lOaR1ho/dqJb2RaBzEFm94npeJWCfGiVUajR10PNah+UOFG68rf4Ya5/yA1J2fjkvpzlskrJXpI6GVMHouAfSsxasqty1lABN22O9cwzg9Yyht9aPYixZHazn/O1RzXhTaQ5uYKdSU6vVJOE0imkU+mmlKcJpFMNPNMNEohNNNNONNNCaYaYwpxpGpShCYUw09jTDRKFnlNFQ1ERqkK1XLMpCmjq1RUajq1JSRgag8obebC3h+4T+XpfKpitXrq5kZfeUjzEUIWWttms2H60yHvtuy/8pt0RKpLW0+awyWystz5A6gGWGB/mRPOp7vilEthiB23FHxqDXAWVdag9zy4C34RrO2+Yx1hAJ33D25dyjwDHwFdD2baW9dfHMQwnLaHBVAEsZ3Eme6uK7ftX7ly3ft2HDWwZjWRvERB693XUrZfKS/7ItM4mctwu1sE7ibYADfzTWbEUXPMj9+y6GDc1lPKdetYnynwW32lt04faVxFIbD37XP2gxgI4bI5U8LbGWjdxG+g4flUSXT7xayuGLqTvyKzKtuNJLBQQd65tax+OD4q61zE37aOOgecYLu1IB4ax17qibS2HaFlgmIS48FlVGnNlE+7v0PGrBmy5YtvryUzTpgy50O4N9J8eu4dq6uJm4zgBQSM0sVOjEjdx9anbMfmehMhkFkniRIBI8p8KxuHuQCOHEDeRWrwTi65EgkatHSiTuk1pphjWy4wBBn826C51btnvLGjNmDgABoCIP5vqdFpdksyq1ouwVxAGYkKYhSOo6kz3ULlNcWxhw9wdPmUQgHeysV4DgCNewb6daaATDsFAJ7Buk1nuVG0RjCEVH/RsoYkAr02A3qfjUsRUw1Zph2g9wfZVfTaP1DCYgOdTME62MHI9vAkgQ4zbhqtpycw/Pjn2UhSASOPsFgD2gAedabC4gXUaypIzBbc6aZkLHTwA8ai8koTCuSPfg9q2TNVvJrGZbisYCi4xJJAE81A+B868JWPaPc8+PMr2jGw3KOHsskxOdw28OV14AARW65NiMOkDTeI6ydfWsjt6z/5+6tvpC5luLGoAYbid3WPCrLZT3rNp0eyjqSWliQVgaldNRoDvrv0iXMDu4ekrUK1LIASB3eSt7uDt7StXcE9xrf6RWUrGuXcSCN2bh3Vyva+zRh7i3LbEpmKsHgOjKSGDRoRIIra7LdluowMHOAPExWY5b3FLXiu77zeju5xj8DRRqvztE224dCLLm4ik17XvOsSun/Z9tDDLs50u52VrtwtcRZChoRcr2zmEBAMw4ilsbPsWiHwzrctMdH/EOORxAKnjEAetWHILAWLODXDMDmOHTnR0jLsudoE6EZ6zu3sL93Z/ura5SRznsyNdRI038eFbQ5wP3aLn1KFCuwimXZwJ4EGBJ8OMXPBXOFbpP/F9abfw8mR/pXNxymxepGMwizvygH5mgXeUGJO/aij+GyT8LdX23HMLkCk4jTyPwui2Um+gI9hLtzxCc2vrdHlV/sz+xt9qg+evzrIfZnbe9Zxd+7fa7oLaO0gQGzGAQIkgeVbNCAABuAgdwqIu4rS1mRgCNNemh56TNUkIhNITQy9NLUITyaaTTS1MLUkJ5NMJppamM1CaVjTSaaWprNSQvMaYTSM1CZ6ELmS8pLnur60VOUtz3V9aqubJ66Ig7K1Lm5jurdeUt33F9aKOVF33F9aqOaPD50RLR3RPdTtso53bq1XlVd9xfWnjlVd9xfWq63hyACyNBJE8JEEjv1HnThhW0BETrPZ40rIzv3VdtQ57bzozszqO0HPArGkVu7pgERvn5VjLmEfOyqjGCRoCR2VUQt9J1rqOGPWfM1ocS7f7RQSf1BiTGli2TVVa2Vfb8BHa0j031pbOzLj40XgJUWxoPaJWwLcBPa3zw3Cq3ArSwjzHul2kzC9dART039pA34iNNeyh4bnSynmgCpBUi3EHgd9ba8Om38TfE0W1pVLmH/kV0G4gGCabTyPnErk20dnXLLFWtuqn2CyMAyn2SCRroR51fWMBjLFi3iDYZEyhQ0Kc29hmUa9e8TpvreYsDFYixYvRltr0OuQSSO4yN/ug7xWl5XWsuBazbQsxyhQNwhgZY8BAI8ai+tBDIndUNw+r5Lb2XGLu3b12EWJIM5RuhjHHqM69dH2OWQm1cEZ2QrrMwZcHwo+C2LibVxnuW1ht+QPI81EirfFW7JtWnEreW6EK7w6sDL9kbqrxIa1haGgLRhHVMwqZiTcfg2/fitIMXct4bmcuWQXEjUykEyf4iKotk3CULfxHwkL8a6BaVLuHtuygjm7g1G7QMD/k9ax3JS6tvA3HYTmKW9NSFksTHaSvlXm2uGRx7x72XRBvHWqqcSCmJQmFm2NW000jiK1OzTzg11XdOmUiDIBnf30fFc0cdhkhTFhRJAIIm4Y17qncqdntbUnBqLTXEZLjADIQy9HoSJedQRu413MDWmk1scFz8Sy+aetOaz9vACzfQqSwBa4QYJAtjMd3dWFwexcRjri2rShiCHfpAAFyQBJ0LHU+FanYGGvYJw/tmSTplmY3EMTOldF5P3LN++b1lSqgBnkAfpCN08Yn0q9tPK6etEn1i5kai1/AzBH73WX2bya2qlzNByg6DnlOkR71WX+62NZ5dARuM3EmDoRvroNtxNSGcTpQKDRur3fWa7tWt5H5Xx3dsMjskewzL+UlflTQDu0qdyktP9/xS6gDE3+zTnWr2CtZriqBvIgVtJXGA4Ls/wBn2GNnZlyQpAtLcmTJfMx9mN0ZTMz2VUpyxun9Sv5m+lbTDYQWcM+GG/7uS/YYUKvgPjXNrWE09keZooQZlZ8UXgtymOgrU8s7s/2K/mP0pX5Y3R+pHmfpVP8AcwPwj+U04WeJQ7+v/Wr4bssuarurUcsb37FfzH6V5+WF0fqB+Y/Sqs4YnXUA9tNfCmcuYz4EUQ3ZPNV3VmOWV39ivm30pp5ZXf2K/mP0qtbCwN65u0xQmwFydD8D8qUN2RNXdWp5ZXOFlfzH6Uh5X3P2K/mP0qlfDXlHAzTFVvdI9aUN2TzVd1dPywufsl/MfpQv98n/AGS/mP0qqe32me+KAU11J7qICM9TdXB5ZP8Asl/MaRuWL/sl/MapLg6j8/SmqOBjyNR+1SzVN1D+89nqaarDiB6062p3/Kpi2j7u/dpqTpAg94pyeKhlGgCHauyQB6TR7TToN/iPWrDYGAu3z+hCypGu4gkMRrw9k691a48nrpsBFRGfotJ6BUAEQuXRjqJJPDupl8cUxRJEgLF2Q5ZV3cASwAAJ4k7hJOtXWDwitbZm9u2wUguSrqytlyMobpZo03aUzEbBvWxLFQSQEtyc7yY6KgfGKj2rDDLnVwrExDHUqY1Gmo0oLp0QKcahVO0iAxCyOkRqIIjfIoKYq6NztRdpW2W5DNmnpA9h1Ezxioy1x8U7PUM8NF7D6bTFKg0tsSJP5urDZuLuG4FZiQe2tqmDUKMphiknscmLces9mnE1hNn/ANqnfXQsMekOy5ZHh0D8zXNcQyuwgRp6x6LpVS5+GcCd/S3LXxUfG4ZDa5xOKq43wAyhonzHhVMt0xVnhg3MRPtYdUGmma290Ez1wR/QrJBcXHt2j3hvktbGRSe6m021jaSbeXusTSa7BUeL6TvYX5khXWxLRu40GYFsanvNWq483CXJPSJPcOGnDSKzmzcW9tHH6y4QhYTlAA6WWeOoq3w4CqBWmiJJcVixX8g0cEe/c0rHbWXMT2OPLNB9Ca1V41Q38Lm58j8Fpro/kKk+k1bUGiponVXN3DsmFsMhKM5eXWRKlYysNzSGO+qm7hGtpAuNl06Mwu/iBvq9uNmw+GWfwMf+UA/GoeOw8qd26q6dFrmSRe6dWu5tWJtZVuysHna9dViHtIroJ0MPDAjrjdXQ7Vw4zD27tsywUBlnwnvG41l+QeFR3us4JACaAxMk7zG7StBs4jB4zKBFi+TlHBHPtJPUd4qIEfcFKocxLFbbO2IqEO/Sbh7o+pq5s2wNygTvgATTTiIMZfWhY5Tdtm2He1mjp2yA4G+AxBia0LDrYqwVdOrtojYq2ujOo72A+dZrD8l7IIZ7uIc/3l4t8as8Tydw1y7z9xWZ5BnORu3aCOqoyVYG0pu4/gfJXEuVvJrEPj8SyKuVr1xhLge007vE1N5JcnuaxC4jFMrZIKop0kbszGNO6avtq4O1dvXb5tIwa5c6RRTMOVmfCoQ2bY42rY7rS/StApkjVZTWiRB5rW29vWQ787ftqbisolhq7EZVHlFYi5e1IIPV/UCpibMtbgvkg+EVISwDpJJ7VqxjcnFUVXZ4sqRQZ0GneZp1y9pxHeCaufuagyR5SKZc5sGMpPianIVWRZ77xc3Bo7tKIt+93+VWl3m59g+n0oD5J0tn10qKIUY7TYb0164FNfabtvBA/d31K50xAQeM0ub9xfCaZMJKDdxRb8bz+9/pTBaeNDPjVkLpmMi+RNEafcU+FEhNUpa7v18RTku3JlgT4kfCrZoO62B4f61L2ds83TlMDtJAA76jbipCeCpsPkzAs0DjKz8fjTmxsaJPeCBp2wR2VuLPJqwbZBYE6HNK9ukdURUNtgoCQotNr+NmHl51AkK0NcucLeSJNp47Zj49lTsFtUJuDZY1QyVYQBDKTDLAAg6aViwzREtHeYpJPbU5cduSWVg0nn+l0PZfKZMOIUqnSLxAGpEHhugDSrbD/aIBBDaAHRUXUwdRp161ylCKkWbiDVlJ7A0fI0RumCOE8/0uiXeWYuiXkEbmIRCsTqs6jed3XQrfKC2YChZmcwKZieEMBM1ihjbP/tZ77rfIUVMfZGowkf8AGf6U5j/b6fKjl/7eR+Fb7ZxJuX2c8cvoI+VQ1pnOBukFygicskx2Sd9PBrj1DLj4n1XrqAikwbAegUvZx/Sp/FW9wzdHN/ej/KQv/TWAwDAXVJ3Aye4VuMK36BT1gv8AmlvnXOxJiow+HqtbRNIjx9EuzMSBFs/jGKXXg6kXAfR/OuVNyjxOYqIJkgAICfATNdDbS5aP/wAq/wCTYa6flXLLpIxrKP27L1b3KkeRIrsMYw1XAi/xHyuAatRtGmWuI08y4f0rZ7av3rGzLF+Mtxr5kshEg25bQ7tQKzn+9+K4Mv5FrY8t8RzmyECsWCXbQc6ncjDQxG/IP+9cxLCIAnvq+i1uTRZ8TUf2hurw8qcWfxj8iVruSlu/ewONvvq5wt0IIUMQRAIUakTxjjXMhcjh8a7TyQw2XZpKAlhKi5mUpldIyxMlPZ4jWKlVa0CCoUXOMkHoqD9oVi9hsJhb1iUChrdw9Fo6UpOaevh7wrADlFjGMC+SToNEGvDcvXXR/tIATY9r2STiVkFpLpkYiI6iFMdlcqweLQXELW1yhgTAM6GeJps0sFW8y6SfVdN2sb9nCF8ITbuc6pulSqDmxbfeW09oiANayezduYnEXkR8S5XMpOd2KiTAhTALSQB29xrU7euh8DfyssG2GMiQwV1uaGYM5SPGs5sDZdi8guoWDoRK9DKHGqn2Zjx66i9zRc6KwBxdrddA5WbMvX8GuLw991uWbRNxTdZLdxEEs0hgquJ3nsB4EcqTbmJbdmbvLn4mumY/NdwiYMFlQHO7Ay1x+2dAgMQscB1VU4/kwi4a6QWLc22U5iCGCyJywN46qrbVaLBSfTJus5gtr41dVS1/Nk/6mrfbO5YcxsdWdv0wLoqyCQ0koO5QQe4AcRXIr7C82e2CqhFBUsT0svSOvWZqRs/ZDu+UEAnST3kcN+oNWkbqvwXROSTs2Ctkudc41/xG41b9LfnoOzNkJatpZDHKoidN/Enqkz51YpgLYOp8j/X9TVBe4mxKtDGgaBRhn9/0H0p/N3TubXuH0oxwQG4k0VLf7xHf9aMztyjK3YKGcPe94+n0prYa973wqyzkaHXwodxQdQYozO3KWVuw5Kt+73ff9AflSNh7vvf5R9KsMsfi/rzppfqI9R8jRmduU8rdgq17V3r9B9KQi71+kVYNd6vr8qBdxBG8fL5U8zt0ZW7BQc10fiprXbvFvSjvd/uz50O446qMx3Syt2UZ7z/tPPShc653OPA/SnXcPOsR5/Kh/dDwynvb60Sd0fbshPmnVvU0NrRPH1qQ2GbiD4fKo3MneGbypXTkLnPjTgK8KUV0FzV4T1etPCn+jNKDXhQkvajqpDNPEUs00cFbWm0HcKKDUNH0FGVz1Vx3NXrmOsFJt6sAeJAPdNdDc/ov5D8DXObB6Q7x8a6Fc1t96R5iuZjB99Px9wttH/Td1wKj4dQYLAkC650jQmy6A6/xDzrke3CRjL5GhF+4RHD9ISIrrWz7sq3+IfLKD865rygsqcVeI43G8+PrNdSg4nGVAdAPXKuFXYBgKRGpJ8i/5UDHbdxN20ti5dY21bOEhVXNEZiFAk9pqtqecNTrWBLGFE+XzrpAgBcshxMlV0UW1cZdVJEENoeI3Hvq7tcm77brf+ZP/wBVMt8j8TxQDvdfkaRqNQGOWexmPvXsvO3GfKCFDGQoO/KNwoa2h1n8o+OatcnIu/xKD+Yn4Cp+G5FD9ZdJ7FEepn4VA1WDipCk4lYnDLcUgqV46FhGoKmRPUTVps3ZmL3/AKXL+47a90MK32A2Jh7UFEE+8ek3md3hFWlq3PDxql1cnQK1tGNSufXNmbQzTaa8o/fvMe7uqVa2ftc/+o83J+KmugDD91LPUKh2h2HJTLBuea51s7kTi1BBayASD7Tk90Za02w+S5tMLlxhcI3Kq5ROupJJJ1JNX6rUpDpx+tMvcdUg0DRDtWidygdn9b6kop6hT0YDWvc8J0pITha8+80MgCkbEEH+v67aZdJOvpQhPNzrNNUL21HY603ORQhSSF4GhNa6taju538KbbvmiELzqwNMZW4xRmuHdQFxBndu/rjSTTXHZQzRDfHVQ8y+lNEITEUwuOIpXEjSo9xCP+9NJEuW1O700oDBhxNNL+dDGK/qKcpQv//Z",
    StartDate: "2023-07-10",
    EndDate: "2023-07-15",
    Travelers: {
      Traveler: [
        {
          Name: "小明",
          Age: 18,
          Gender: "男",
          Nationality: "中国",
        },
        {
          Name: "小红",
          Age: 19,
          Gender: "女",
          Nationality: "中国",
        },
        {
          Name: "小李",
          Age: 20,
          Gender: "男",
          Nationality: "中国",
        },
      ],
    },
    Itinerary: {
      Day: [
        {
          Date: "2023-07-10",
          Transportation: {
            Mode: "飞机",
            Details: "从北京飞往香港",
          },
          Meals: {
            Breakfast: "机上早餐",
            Lunch: "机上午餐",
            Dinner: "香港酒店晚餐",
          },
          Activities: {
            Activity: {
              Name: "抵达香港",
              Description: "抵达后入住酒店，休息",
              Location: "香港国际机场",
              Time: "下午14:00",
            },
          },
        },
        {
          Date: "2023-07-11",
          Transportation: {
            Mode: "地铁",
            Details: "前往香港迪士尼乐园",
          },
          Meals: {
            Breakfast: "酒店早餐",
            Lunch: "迪士尼乐园午餐",
            Dinner: "酒店晚餐",
          },
          Activities: {
            Activity: {
              Name: "迪士尼乐园探险",
              Description: "度过一天在乐园玩耍",
              Location: "香港迪士尼乐园",
              Time: "全天",
            },
          },
        },
        {
          Date: "2023-07-12",
          Transportation: {
            Mode: "出租车",
            Details: "前往维多利亚港",
          },
          Meals: {
            Breakfast: "酒店早餐",
            Lunch: "海边午餐",
            Dinner: "香港夜景晚餐",
          },
          Activities: {
            Activity: {
              Name: "维多利亚港游船",
              Description: "晚上在游船上欣赏维多利亚港夜景",
              Location: "维多利亚港",
              Time: "晚上19:00",
            },
          },
        },
        {
          Date: "2023-07-13",
          Transportation: {
            Mode: "地铁",
            Details: "参观天坛大佛",
          },
          Meals: {
            Breakfast: "酒店早餐",
            Lunch: "大佛附近午餐",
            Dinner: "香港酒店晚餐",
          },
          Activities: {
            Activity: {
              Name: "天坛大佛参观",
              Description: "参观天坛大佛，感受宗教文化",
              Location: "天坛大佛",
              Time: "上午10:00",
            },
          },
        },
        {
          Date: "2023-07-14",
          Transportation: {
            Mode: "地铁",
            Details: "自由活动和购物",
          },
          Meals: {
            Breakfast: "酒店早餐",
            Lunch: "购物区午餐",
            Dinner: "香港酒店晚餐",
          },
          Activities: {
            Activity: {
              Name: "自由活动和购物",
              Description: "探索香港的购物区域，自由活动",
              Location: "香港市区",
              Time: "全天",
            },
          },
        },
        {
          Date: "2023-07-15",
          Transportation: {
            Mode: "飞机",
            Details: "返回北京",
          },
          Meals: {
            Breakfast: "酒店早餐",
            Lunch: "机上午餐",
            Dinner: "回国晚餐",
          },
          Activities: {
            Activity: {
              Name: "离开香港",
              Description: "退房并前往香港国际机场，结束旅程",
              Location: "香港国际机场",
              Time: "上午11:00",
            },
          },
        },
      ],
    },
  },
};

const MarketplacePage = (props: Props) => {
  return (
    <div className="container mx-auto py-8 px-4">
      <Head>
        <title>Travel Marketplace</title>
      </Head>

      {/* 搜索框 */}
      <div className="flex items-center justify-center mb-8">
        <input
          type="text"
          placeholder="搜索旅行计划..."
          className="border border-gray-300 rounded-md py-2 px-4 w-1/2"
        />
        {/* 搜索按钮 */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 ml-2 rounded-md">
          搜索
        </button>
      </div>

      {/* Hero 广告位 */}
      {/* <div className="bg-gray-200 rounded-md mb-8 p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">独特的旅行体验等你发现！</h2>
        <p>探索最新的旅行计划，开始你的奇妙旅程。</p>
      </div> */}
      <Advertising
        title="独特的旅行体验等你发现！"
        content="探索最新的旅行计划，开始你的奇妙旅程。"
      />
      {/* 旅行计划格子 */}
      <div className="grid grid-cols-3 gap-4">
        {/* 假设旅行计划组件 TravelPlanCard 是一个自定义组件 */}
        {/* 这里渲染多个 TravelPlanCard 组件 */}
        {/* 示例代码，实际项目中数据应来自后端或 API */}
        {Array.from({ length: 9 }).map((_, index) => (
          //   <div key={index} className="bg-white rounded-md p-4 shadow-md">
          //     {/* 这里渲染每个旅行计划的卡片组件 */}
          //     <h3 className="text-lg font-semibold mb-2">旅行计划标题</h3>
          //     <p>旅行计划描述...</p>
          //     <p className="text-sm text-gray-500 mt-2">价格：$200</p>
          //     <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 mt-4 rounded-md">
          //       购买
          //     </button>
          //   </div>
          <TravelPlanCard plan={plan} />
        ))}
      </div>
    </div>

    //   Detail Page
    // <div className="container mx-auto py-8 px-4">
    //   {/* 展示多个旅行计划卡片 */}
    //   <div className="grid grid-cols-3 gap-4">
    //     {/* {plans.map((plan, index) => (
    //       <TravelPlanCard key={index} plan={plan} />
    //     ))} */}
    //     <TravelPlanCard key={plan.TravelPlan.EndDate} plan={plan} />
    //   </div>

    //   {/* 在这里展示选定旅行计划的详细信息 */}
    //   {/* <TravelPlanDetails plan={selectedPlan} /> */}
    // </div>
  );
};

export default MarketplacePage;
