package net.rantingmong.maoo.ui.sample

import android.view.ViewGroup
import androidx.recyclerview.widget.RecyclerView
import kotlinx.android.synthetic.main.holder_view_feed_post.view.*
import net.rantingmong.maoo.ui.sample.holder.FeedViewHolder
import net.rantingmong.maoo.ui.sample.holder.view.FeedViewPost
import java.lang.IllegalStateException

class FeedAdapter: RecyclerView.Adapter<FeedViewHolder>() {

  enum class ItemType(val id: Int) {
    ITEM(0);

    companion object {
      fun parse(id: Int): ItemType? = when (id) {
        0     -> ITEM
        else  -> null
      }
    }
  }

  override fun onCreateViewHolder(parent: ViewGroup, viewType: Int): FeedViewHolder =
    FeedViewHolder(when (ItemType.parse(viewType)) {
      ItemType.ITEM -> FeedViewPost(parent.context, null)
      else          -> throw IllegalStateException()
    })

  override fun onBindViewHolder(holder: FeedViewHolder, position: Int) {
    when (ItemType.parse(getItemViewType(position))) {
      ItemType.ITEM -> {
        val post = holder.itemView as FeedViewPost
        post.holder_view_feed_post_content.text = "Item $position oh yeah~"
      }
    }
  }

  override fun getItemCount(): Int =
    10

  override fun getItemViewType(position: Int): Int {
    return ItemType.ITEM.id
  }
}
