import {
    GraphQLObjectType,
    GraphQLInt,
    GraphQLString,
    GraphQLNonNull
} from 'graphql'

export default new GraphQLObjectType({
    name: "owner",
    description: "",
    fields: () => ({
        id: { type: GraphQLNonNull(GraphQLInt)  },
        name: { type: GraphQLNonNull(GraphQLString) }
    })
})