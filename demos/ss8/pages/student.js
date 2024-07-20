function Student(props) {

    return (
        <>
            <h1>Danh sách</h1>
        </>
    )
}

export const getServerSideProps = async (req, res) => {

}

export const getStaticProps = async (req, res) => {
    return {
        props: {
            students: [

            ]
        }
    }
}

export const getStaticPaths = async (req, res) => {

}
export default Student;