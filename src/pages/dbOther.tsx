
import { connect } from "react-redux"

function DbOther() {
    return (
        <div className="w-full h-[100vh]">
            <div className="md:py-[2rem]">
                <h1 className="md:py-1 md:px-6 font-inter text-[30px] font-bold">
                    Images
                </h1>
            </div>
            <div className="">

            </div>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        gen: state.gen
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fecthAllImages: (value: object) => dispatch()
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DbOther);